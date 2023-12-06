<template>
  <div class="flex flex-col">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                STT
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Nhóm
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Nhóm 1
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                  >(2.0)</span
                >
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Nhóm 2
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                  >(1.5)</span
                >
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Nhóm 3
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                  >(1.2)</span
                >
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Nhóm 4
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                  >(1)</span
                >
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Nhóm 5
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                  >(0.8)</span
                >
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Số khách
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Hệ số kiểu 1
              </th>
              <th
                class="px-6 py-3 font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
              >
                Hệ số kiểu 2
              </th>
              <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="(item, index) in items" :key="index">
              <td
                class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center"
              >
                {{ items.length - index }}
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2 border-b-2">
                  <span
                    class="inline-flex px-2 font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >Khách hàng</span
                  >
                </div>
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    class="inline-flex px-2 font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full"
                    >Người thân</span
                  >
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2 border-b-2">
                  <span
                    :class="item?.data?.k1 ? 'text-green-800 bg-green-100' : ''"
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.k1 || '-' }}</span
                  >
                </div>
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    :class="
                      item?.data?.nt1 ? 'text-orange-800 bg-orange-100' : ''
                    "
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.nt1 || '-' }}</span
                  >
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2 border-b-2">
                  <span
                    :class="item?.data?.k2 ? 'text-green-800 bg-green-100' : ''"
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.k2 || '-' }}</span
                  >
                </div>
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    :class="
                      item?.data?.nt2 ? 'text-orange-800 bg-orange-100' : ''
                    "
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.nt2 || '-' }}</span
                  >
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2 border-b-2">
                  <span
                    :class="item?.data?.k3 ? 'text-green-800 bg-green-100' : ''"
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.k3 || '-' }}</span
                  >
                </div>
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    :class="
                      item?.data?.nt3 ? 'text-orange-800 bg-orange-100' : ''
                    "
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.nt3 || '-' }}</span
                  >
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2 border-b-2">
                  <span
                    :class="item?.data?.k4 ? 'text-green-800 bg-green-100' : ''"
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.k4 || '-' }}</span
                  >
                </div>
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    :class="
                      item?.data?.nt4 ? 'text-orange-800 bg-orange-100' : ''
                    "
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.nt4 || '-' }}</span
                  >
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2 border-b-2">
                  <span
                    :class="item?.data?.k5 ? 'text-green-800 bg-green-100' : ''"
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.k5 || '-' }}</span
                  >
                </div>
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    :class="
                      item?.data?.nt5 ? 'text-orange-800 bg-orange-100' : ''
                    "
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.nt5 || '-' }}</span
                  >
                </div>
              </td>

              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2 border-b-2">
                  <span
                    :class="
                      item?.data?.ksl ? 'text-green-800 bg-green-100' : ''
                    "
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.ksl || '-' }}</span
                  >
                </div>
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    :class="
                      item?.data?.ntsl ? 'text-orange-800 bg-orange-100' : ''
                    "
                    class="inline-flex px-2 font-semibold leading-5 rounded-full"
                    >{{ item?.data?.ntsl || '-' }}</span
                  >
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    class="inline-flex px-2 text-lg font-semibold leading-5 text-fuchsia-800 bg-fuchsia-100 rounded-full"
                    >{{ item?.data?.hs1?.toFixed(3) || '-' }}</span
                  >
                </div>
              </td>
              <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div class="text-sm text-center leading-5 py-2">
                  <span
                    class="inline-flex px-2 text-lg font-semibold leading-5 text-sky-800 bg-sky-100 rounded-full"
                    >{{ item?.data?.hs2?.toFixed(3) || '-' }}</span
                  >
                </div>
              </td>

              <td
                class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
              >
                <a
                  @click="updateFormHeSo(item)"
                  href="#"
                  class="text-indigo-600 p-2 border-2 rounded-md mr-2 border-indigo-600 hover:text-indigo-900"
                  >Sửa</a
                >
                <a
                  @click="deleteHeSo(item?.id)"
                  href="#"
                  class="text-red-600 p-2 border-2 border-red-600 rounded-md hover:text-red-900"
                  >Xóa</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { defineProps, defineEmits, inject } from 'vue';
import { deleteDoc, doc, Firestore } from 'firebase/firestore';
const { items, fetchHeSos } = defineProps(['items', 'fetchHeSos']);
const firestore = inject<Firestore>('firestore');

const emit = defineEmits();

const updateFormHeSo = (item: any) => {
  emit('updateFormHeSo', item);
};

const deleteHeSo = async (heSoId: any) => {
  if (firestore) {
    await deleteDoc(doc(firestore, 'hesos', heSoId));
    fetchHeSos();
  }
};
</script>
