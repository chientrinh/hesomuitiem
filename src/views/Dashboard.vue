<script setup lang="ts">
import {
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  where,
  Firestore,
  Timestamp,
  orderBy,
  updateDoc,
} from 'firebase/firestore';
import { ref, onMounted, inject, computed, Ref } from 'vue';
import HeSoHeader from '../components/HeSoHeader.vue';
import HeSoForm from '../components/HeSoForm.vue';
import HeSoBody from '../components/HeSoBody.vue';

interface Form {
  id: string | null;
  data: {
    k1: number;
    k2: number;
    k3: number;
    k4: number;
    k5: number;
    ksl: number;
    nt1: number;
    nt2: number;
    nt3: number;
    nt4: number;
    nt5: number;
    ntsl: number;
    created_at: Date | Timestamp;
    [key: string]: Date | Timestamp | number | undefined;
  };
}

interface HeSo {
  id: string | null;
  data: {
    k1?: number;
    k2?: number;
    k3?: number;
    k4?: number;
    k5?: number;
    ksl?: number;
    nt1?: number;
    nt2?: number;
    nt3?: number;
    nt4?: number;
    nt5?: number;
    ntsl?: number;
    hs1?: number;
    hs2?: number;
    created_at?: Timestamp;
    [key: string]: Timestamp | number | undefined;
  };
}

const ti_le = {
  '1': 2,
  '2': 1.5,
  '3': 1.2,
  '4': 1,
  '5': 0.8,
};

const TI_LE_MUI_TIEM_NGUOI_THAN = 1.15;

const scrollTarget = ref<HTMLElement | null>(null);

const active_date = ref<Date>(new Date());

const form = ref<Form>({
  id: null,
  data: {
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    k5: 0,
    ksl: 1,
    nt1: 0,
    nt2: 0,
    nt3: 0,
    nt4: 0,
    nt5: 0,
    ntsl: 0,
    created_at: active_date.value,
  },
});

const firestore = inject<Firestore>('firestore');
const heSoNgay = ref<HeSo[]>([]);
const heSoThang = ref<HeSo[]>([]);

const tongMuiTiemKhachThuong = computed(() => {
  return (
    form.value.data.k1 +
    form.value.data.k2 +
    form.value.data.k3 +
    form.value.data.k4 +
    form.value.data.k5
  );
});

const tongMuiTiemNguoiThan = computed(() => {
  return (
    form.value.data.nt1 +
    form.value.data.nt2 +
    form.value.data.nt3 +
    form.value.data.nt4 +
    form.value.data.nt5
  );
});

const scrollToForm = () => {
  if (scrollTarget.value) {
    scrollTarget.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const sumHeSos = (hesos: any[]) => {
  let sumHeSo: any = {
    id: 'sumHeSo',
    data: {
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0,
      k5: 0,
      ksl: 0,
      nt1: 0,
      nt2: 0,
      nt3: 0,
      nt4: 0,
      nt5: 0,
      ntsl: 0,
      hs1: 0,
      hs2: 0,
    },
  };

  hesos.map((item, index) => {
    Object.entries(ti_le).forEach(([key, value]) => {
      const k_key = 'k' + key;
      const nt_key = 'nt' + key;
      let muiTiemkhach = item.data['k' + key] || 0;
      let muiTiemNguoiThan = item.data['nt' + key] || 0;
      if (
        typeof muiTiemkhach == 'number' &&
        typeof muiTiemNguoiThan == 'number'
      ) {
        sumHeSo.data[k_key] += muiTiemkhach;
        sumHeSo.data[nt_key] += muiTiemNguoiThan;
      }
    });

    sumHeSo.data.ksl += item?.data?.ksl ?? 0;
    sumHeSo.data.ntsl += item?.data?.ntsl ?? 0;
  });

  return sumHeSo;
};

const convertHeSoNgay = computed(() => {
  return heSoNgay.value.map((item, index) => {
    return convertHeSo(item);
  });
});

const convertHeSo = (item: any, check = '') => {
  var soMuiQuyDoiTongHeSo1 = 0;
  var soMuiQuyDoiTongHeSo2 = 0;
  let soLuongkhach = item.data['ksl'] || 0;
  let soLuongNguoiThan = item.data['ntsl'] || 0;

  Object.entries(ti_le).forEach(([key, value]) => {
    let muiTiemkhach = item.data[('k' + key) as keyof HeSo] || 0;
    let muiTiemNguoiThan = item.data[('nt' + key) as keyof HeSo] || 0;
    let tiLeNhom = value;
    var quyDoiNhomHeSo1 = 0;
    var quyDoiNhomHeSo2 = 0;
    if (
      typeof muiTiemkhach == 'number' &&
      typeof muiTiemNguoiThan == 'number'
    ) {
      quyDoiNhomHeSo1 = (muiTiemkhach + muiTiemNguoiThan) * tiLeNhom;
      soMuiQuyDoiTongHeSo1 += quyDoiNhomHeSo1;

      // --------------
      quyDoiNhomHeSo2 =
        (muiTiemkhach + muiTiemNguoiThan) * tiLeNhom +
        muiTiemNguoiThan * TI_LE_MUI_TIEM_NGUOI_THAN;
      soMuiQuyDoiTongHeSo2 += quyDoiNhomHeSo2;
    }
  });

  if (soLuongkhach + soLuongNguoiThan) {
    soMuiQuyDoiTongHeSo1 += soLuongNguoiThan * TI_LE_MUI_TIEM_NGUOI_THAN;
    item.data.hs1 = soMuiQuyDoiTongHeSo1 / (soLuongkhach + soLuongNguoiThan);
    item.data.hs2 = soMuiQuyDoiTongHeSo2 / (soLuongkhach + soLuongNguoiThan);
  }

  return item;
};

const fetchHeSos = async () => {
  fetchHeSoNgay(active_date.value);
  fetchHeSoThang();
};

const fetchHeSoData = async (
  startDate: Date,
  endDate: Date
): Promise<HeSo[]> => {
  if (firestore) {
    const collectionRef = collection(firestore, 'hesos');
    const q = query(
      collectionRef,
      where('created_at', '>=', Timestamp.fromDate(startDate)),
      where('created_at', '<=', Timestamp.fromDate(endDate)),
      orderBy('created_at', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: {
        ...doc.data(),
      },
    }));
  }
  return [];
};

const changActiveDate = (day_selected: Date) => {
  const now = new Date();
  if (
    day_selected.getDate() == now.getDate() &&
    day_selected.getMonth() == now.getMonth()
  ) {
    form.value.data.created_at = now;
  } else {
    day_selected.setHours(23, now.getDate(), now.getHours(), now.getMinutes());
    form.value.data.created_at = day_selected;
  }

  active_date.value = day_selected;

  fetchHeSoNgay(day_selected);
};

const fetchHeSoNgay = async (day = new Date()) => {
  if (firestore) {
    const startDate = new Date(day);
    const endDate = new Date(day);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 59);
    heSoNgay.value = await fetchHeSoData(startDate, endDate);

  }
};

const fetchHeSoThang = async () => {
  if (firestore) {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    heSoThang.value = await fetchHeSoData(firstDayOfMonth, lastDayOfMonth);
  }
};

const sumHeSoThang = computed(() => {
  let sumHeSo = sumHeSos(heSoThang.value);
  return convertHeSo(sumHeSo);
});

const dateRange = computed(() => {
  const currentDate = new Date();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const daysArray = <any>[];
  const sumDaysArray = <any>[];
  let currentDateCopy = new Date(currentDate);

  while (currentDateCopy >= firstDayOfMonth) {
    let startDate = new Date(currentDateCopy);
    startDate.setHours(0, 0, 0, 0);
    let endDate = new Date(currentDateCopy);
    endDate.setHours(23, 59, 59, 59);

    if (typeof daysArray[formatDate(startDate)] == 'undefined') {
      daysArray[formatDate(startDate)] = [];
    }

    heSoThang.value.map((item, index) => {
      let created_at = item.data?.created_at?.toDate() || new Date();
      if (created_at >= startDate && created_at <= endDate) {
        daysArray[formatDate(startDate)].push(item);
      }
    });

    currentDateCopy.setDate(currentDateCopy.getDate() - 1);
  }

  Object.keys(daysArray).forEach((key) => {
    const value = daysArray[key];
    let sumHeSo = sumHeSos(value);
    let convert = convertHeSo(sumHeSo, 'check');
    convert.active_date = formatDate(active_date.value) == key;
    convert.date = new Date(key);
    sumDaysArray[key] = convert;
  });

  return sumDaysArray.reverse();
});

const submitForm = async () => {
  if (form.value.id) {
    updateHeSo();
  } else {
    addHeSo();
  }
};

const addHeSo = async () => {
  if (firestore) {
    if (tongMuiTiemNguoiThan.value > 0 && form.value.data.ntsl == 0) {
      alert('Điền [Số Khách] [Người Thân] Vào !!!!!!!!!!!!!');
      return false;
    }

    if (tongMuiTiemKhachThuong.value == 0 && tongMuiTiemNguoiThan.value == 0) {
      alert('Điền [Mũi Tiêm] của [Khách] Vào !!!!!!!!!!!!!');
      return false;
    }

    if (tongMuiTiemKhachThuong.value == 0) {
      form.value.data.ksl = 0;
    }

    await addDoc(collection(firestore, 'hesos'), form.value.data);

    fetchHeSos();
    clearForm();
  }
};

const updateHeSo = async () => {
  if (firestore && form.value.id) {
    if (tongMuiTiemNguoiThan.value > 0 && form.value.data.ntsl == 0) {
      alert('Điền [Số Khách] [Người Thân] Vào !!!!!!!!!!!!!');
      return false;
    }

    if (tongMuiTiemKhachThuong.value == 0 && tongMuiTiemNguoiThan.value == 0) {
      alert('Điền [Mũi Tiêm] của [Khách] Vào !!!!!!!!!!!!!');
      return false;
    }

    if (tongMuiTiemKhachThuong.value == 0) {
      form.value.data.ksl = 0;
    }

    await updateDoc(doc(firestore, 'hesos', form.value.id), form.value.data);

    fetchHeSos();
    clearForm();
  }
};

const updateFormHeSo = (item: any) => {
  form.value.id = item.id;
  form.value.data = item.data;
  scrollToForm();
};

const clearForm = () => {
  form.value.id = null;
  form.value.data = {
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    k5: 0,
    ksl: 1,
    nt1: 0,
    nt2: 0,
    nt3: 0,
    nt4: 0,
    nt5: 0,
    ntsl: 0,
    created_at: active_date.value,
  };
};

interface DateObject {
  yyyy: string;
  mm: string;
  dd: string;
  [key: string]: string;
}

const formatDate = (date = new Date(), format = 'yyyy/mm/dd') => {
  const mapObj: DateObject = {
    yyyy: date.getFullYear().toString(),
    mm: String(date.getMonth() + 1).padStart(2, '0'),
    dd: String(date.getDate()).padStart(2, '0'),
  };

  return format.replace(
    /\b(?:yyyy|mm|dd)\b/gi,
    (matched) => mapObj[matched as keyof DateObject]
  );
};

onMounted(fetchHeSos);
</script>

<template>
  <div ref="scrollTarget">
    <HeSoHeader :sumHeSoThang="sumHeSoThang" />
    <HeSoForm :form="form" @submitForm="submitForm" @clearForm="clearForm" />
    <HeSoBody
      :convertHeSoNgay="convertHeSoNgay"
      :dateRange="dateRange"
      :formatDate="formatDate"
      :changActiveDate="changActiveDate"
      :fetchHeSos="fetchHeSos"
      @updateFormHeSo="updateFormHeSo"
    />
  </div>
</template>
