<template>
  <div class="mt-8">
    <h4 class="text-gray-600">Forms</h4>

    <div class="mt-4">
      <div class="p-6 bg-white rounded-md shadow-md">
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-3 gap-6 mt-4">
            <div>
              <label class="text-gray-700" for="username">Nhóm</label>
            </div>
            <div>
              <label class="text-gray-700" for="password">Khách hàng</label>
            </div>
            <div>
              <label class="text-gray-700" for="passwordConfirmation"
                >Người thân</label
              >
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-4">
            <div class="flex items-center">
              Nhóm 1
              <span
                class="inline-flex px-2 text-base font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                >(2.0)</span
              >
            </div>

            <div>
              <select
                v-model.number="form.data.k1"
                :class="form.data.k1 ? 'bg-orange-300' : 'bg-white'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>

            <div>
              <select
                v-model.number="form.data.nt1"
                :class="form.data.nt1 ? 'bg-orange-300' : 'bg-white'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-4 bg-green-100">
            <div class="flex items-center">
              Nhóm 2
              <span
                class="inline-flex px-2 text-base font-semibold leading-5 text-blue-800 rounded-full"
                >(1.5)</span
              >
            </div>

            <div>
              <select
                v-model.number="form.data.k2"
                :class="form.data.k2 ? 'bg-orange-300' : 'bg-green-100'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>

            <div>
              <select
                v-model.number="form.data.nt2"
                :class="form.data.nt2 ? 'bg-orange-300' : 'bg-green-100'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-4">
            <div class="flex items-center">
              Nhóm 3
              <span
                class="inline-flex px-2 text-base font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                >(1.2)</span
              >
            </div>

            <div>
              <select
                v-model.number="form.data.k3"
                :class="form.data.k3 ? 'bg-orange-300' : 'bg-white'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>

            <div>
              <select
                v-model.number="form.data.nt3"
                :class="form.data.nt3 ? 'bg-orange-300' : 'bg-white'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-4 bg-green-100">
            <div class="flex items-center">
              Nhóm 4
              <span
                class="inline-flex px-2 text-base font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                >(1.0)</span
              >
            </div>

            <div>
              <select
                v-model.number="form.data.k4"
                :class="form.data.k4 ? 'bg-orange-300' : 'bg-green-100'"
                class="focus:bg-white block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>

            <div>
              <select
                v-model.number="form.data.nt4"
                :class="form.data.nt4 ? 'bg-orange-300' : 'bg-green-100'"
                class="focus:bg-white block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-4">
            <div class="flex items-center">
              Nhóm 5
              <span
                class="inline-flex px-2 text-base font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full"
                >(0.8)</span
              >
            </div>

            <div>
              <select
                v-model.number="form.data.k5"
                :class="form.data.k5 ? 'bg-orange-300' : 'bg-white'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>

            <div>
              <select
                v-model.number="form.data.nt5"
                :class="form.data.nt5 ? 'bg-orange-300' : 'bg-white'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-4 bg-green-100">
            <div class="flex items-center">Số khách</div>

            <div>
              <select
                v-model.number="form.data.ksl"
                :class="form.data.ksl ? 'bg-orange-300' : 'bg-green-100'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
              </select>
            </div>

            <div>
              <select
                v-model.number="form.data.ntsl"
                :class="form.data.ntsl ? 'bg-orange-300' : 'bg-green-100'"
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="0">0</option>
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
              </select>
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              @click="clearForm"
              type="button"
              class="px-4 mr-5 py-2 text-white bg-red-800 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
            >
              Xóa
            </button>
            <button
              class="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { form } = defineProps(['form']);
const emit = defineEmits();

const submitForm = () => {
  emit('submitForm');
};

const clearForm = () => {
  emit('clearForm');
};
</script>
