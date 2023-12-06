<template>
  <div class="mt-8 bg-white p-5">
    <p class="mb-2">
      <span
        class="inline-flex px-2 font-semibold leading-5 text-fuchsia-800 bg-fuchsia-100 rounded-full"
        >Hệ số kiểu 1</span
      >: <strong class="text-red-400">(</strong
      ><strong class="text-green-400">(</strong>Mũi tiêm Khách + Mũi tiêm Người
      thân<strong class="text-green-400">)</strong>* Tỉ lệ +
      <i><strong>Số lượng Người thân</strong></i>
      * 1.15<strong class="text-red-400">)</strong> / Tổng số khách
    </p>
    <p>
      <span
        class="inline-flex px-2 font-semibold leading-5 text-sky-800 bg-sky-100 rounded-full"
        >Hệ số kiểu 2</span
      >: <strong class="text-red-400">(</strong
      ><strong class="text-green-400">(</strong>Mũi tiêm Khách + Mũi tiêm Người
      thân<strong class="text-green-400">)</strong> * Tỉ lệ +
      <i><strong>Mũi tiêm Người thân</strong></i>
      * 1.15<strong class="text-red-400">)</strong> / Tổng số khách
    </p>
  </div>
  <div class="flex mt-8 gap-2">
    <div class="w-2/12">
      <div
        v-for="key in Object.keys(dateRange)"
        :key="key"
        :class="dateRange[key]?.active_date ? 'bg-yellow-300' : 'bg-white'"
        @click="changActiveDate(dateRange[key]?.date)"
        class="px-2 py-2 mb-2 cursor-pointer rounded-md shadow-sm"
      >
        <div class="mx-5">
          <h4 class="text-2xl mb-5 text-center font-semibold text-gray-700">
            {{ formatDate(dateRange[key]?.date, 'dd/mm/yyyy') }}
          </h4>
          <div class="flex gap-2 content-between justify-between">
            <div class="text-center">
              <div>HS Kiểu 1</div>
              <span
                class="inline-flex px-2 font-semibold leading-5 text-fuchsia-800 bg-fuchsia-100 rounded-full"
                >{{ dateRange[key]?.data?.hs1?.toFixed(3) || 0 }}</span
              >
            </div>
            <div class="text-center">
              <div>HS Kiểu 2</div>
              <span
                class="inline-flex px-2 font-semibold leading-5 text-sky-800 bg-sky-100 rounded-full"
                >{{ dateRange[key]?.data?.hs2?.toFixed(3) || 0 }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-10/12">
      <HeSoTable
        :items="convertHeSoNgay"
        @updateFormHeSo="updateFormHeSo"
        :fetchHeSos="fetchHeSos"
      />
    </div>
  </div>
</template>
    
<script setup>
import { defineProps } from 'vue';
import HeSoTable from './HeSoTable.vue';

defineProps([
  'convertHeSoNgay',
  'dateRange',
  'formatDate',
  'changActiveDate',
  'fetchHeSos',
]);

const emit = defineEmits(['updateFormHeSo']);

const updateFormHeSo = (item) => {
  emit('updateFormHeSo', item);
};
</script>
  