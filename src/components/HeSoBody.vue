<template>
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
          <div class="flex justify-between text-center">
            <div>
              <p>Số khách </p>
              <p>
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >{{ dateRange[key]?.data?.ksl || 0 }}</span
                >
              </p>
            </div>
            <div>
              <p>Số NT</p>
              <p>
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full"
                  >{{ dateRange[key]?.data?.ntsl || 0 }}</span
                >
              </p>
            </div>
          </div>
          <div class="flex gap-2 content-between justify-between">
            <div class="text-center">
              <div>HS 1</div>
              <span
                class="inline-flex px-2 font-semibold leading-5 text-fuchsia-800 bg-fuchsia-100 rounded-full"
                >{{ dateRange[key]?.data?.hs1?.toFixed(3) || 0 }}</span
              >
            </div>
            <div class="text-center">
              <div>HS 2</div>
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
        :showpopup="showpopup"
        :formatDate="formatDate"
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
  'showpopup',
]);

const emit = defineEmits(['updateFormHeSo']);

const updateFormHeSo = (item) => {
  emit('updateFormHeSo', item);
};
</script>
  