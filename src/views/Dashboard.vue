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

const scrollToTop = ref<HTMLElement | null>(null);
const scrollToBody = ref<HTMLElement | null>(null);

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

const popup = ref({
  success: false,
  error: false,
  message: '',
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

const scrollTo = (element: string) => {
  const scrollTo = element == 'top' ? scrollToTop.value : scrollToBody.value;
  if (scrollTo) {
    scrollTo.scrollIntoView({
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
  active_date.value = day_selected;
  clearForm()
  fetchHeSoNgay(day_selected);
  scrollTo('body');
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

const sumHeSoNgay = computed(() => {
  let sumHeSo = sumHeSos(heSoNgay.value);
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
    try {
      await addDoc(collection(firestore, 'hesos'), form.value.data);
      showpopup('success', 'Thêm khách hàng thành công!');
    } catch (error) {
      showpopup('error', 'Lỗi thêm khách hàng!');
      console.log(error);
    }
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
    try {
      await updateDoc(doc(firestore, 'hesos', form.value.id), form.value.data);
      showpopup('success', 'Cập nhật thành công!');
    } catch (error) {
      showpopup('error', 'Lỗi sửa khách hàng!');
      console.log(error);
    }
    fetchHeSos();
    clearForm();
  }
};

const updateFormHeSo = (item: any) => {
  form.value.id = item.id;
  form.value.data = item.data;
  scrollTo('top');
};

const getCreatedAt = () => {
  const now = new Date();
  let created_at = now;
  if (
    active_date.value.getDate() == now.getDate() &&
    active_date.value.getMonth() == now.getMonth()
  ) {
    created_at = now;
  } else {
    let hours = 23;
    let min = now.getDate();
    let sec = now.getHours();
    let ms = parseInt(
      now.getMinutes().toString() + Math.floor(now.getSeconds() / 10).toString()
    );
    active_date.value.setHours(hours, min, sec, ms);
    created_at = active_date.value;
  }
  return created_at;
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
    created_at: getCreatedAt(),
  };
};

interface DateObject {
  yyyy: string;
  mm: string;
  dd: string;
  hh: string;
  ii: string;
  ss: string;
  SSS: string;
  [key: string]: string;
}

const formatDate = (date = new Date(), format = 'yyyy/mm/dd') => {
  const mapObj: DateObject = {
    yyyy: date.getFullYear().toString(),
    mm: String(date.getMonth() + 1).padStart(2, '0'),
    dd: String(date.getDate()).padStart(2, '0'),
    hh: String(date.getHours()).padStart(2, '0'),
    ii: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),
    SSS: String(date.getMilliseconds()).padStart(3, '0'),
  };

  return format.replace(
    /\b(?:yyyy|mm|dd|hh|ii|ss|SSS)\b/gi,
    (matched) => mapObj[matched as keyof DateObject]
  );
};

const showpopup = (type = 'success', message = '') => {
  if (type == 'success') popup.value.success = true;
  else popup.value.error = true;
  popup.value.message = message;

  setTimeout(() => {
    popup.value = {
      error: false,
      success: false,
      message: '',
    };
  }, 5000);
};

onMounted(fetchHeSos);
</script>

<template>
  <div ref="scrollToTop">
    <div class="absolute top-1 right-6 z-10">
      <div
        v-if="popup.success"
        class="flex w-full max-w-sm ml-3 overflow-hidden bg-white rounded-lg shadow-md"
      >
        <div class="flex items-center justify-center w-12 bg-green-500">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
            />
          </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold text-green-500">Success</span>
            <p class="text-sm text-gray-600">{{ popup.message }}</p>
          </div>
        </div>
      </div>
      <div
        v-if="popup.error"
        class="flex w-full max-w-sm ml-3 overflow-hidden bg-white rounded-lg shadow-md"
      >
        <div class="flex items-center justify-center w-12 bg-red-500">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
            />
          </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold text-red-500">Error</span>
            <p class="text-sm text-gray-600">{{ popup.message }}</p>
          </div>
        </div>
      </div>
    </div>
    <HeSoHeader
      :sumHeSoThang="sumHeSoThang"
      :sumHeSoNgay="sumHeSoNgay"
      :active_date="active_date"
      :formatDate="formatDate"
    />
    <HeSoForm :form="form" @submitForm="submitForm" @clearForm="clearForm" />
    <div ref="scrollToBody" class="relative -top-44"></div>
    <HeSoBody
      :convertHeSoNgay="convertHeSoNgay"
      :dateRange="dateRange"
      :formatDate="formatDate"
      :changActiveDate="changActiveDate"
      :fetchHeSos="fetchHeSos"
      @updateFormHeSo="updateFormHeSo"
      :showpopup="showpopup"
    />
  </div>
</template>
