<template>
  <div class="sticky bg-gray-200 top-0">
    <h3 class="text-3xl font-medium text-gray-700">
      Kiểm tra thông tin
      <i>
        {{
          new Date().getDate() +
          '/' +
          (new Date().getMonth() + 1) +
          '/' +
          new Date().getFullYear()
        }}
      </i>
    </h3>

    <div class="mt-1 py-2 border-b-4 border-cyan-300">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-fuchsia-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                fill="#ffffff"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490.039 490.039"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M483.919,6.175c-8.3-8.3-20.8-8.2-29.1,0.1l-81.7,81.7c-27.6-15.1-62.9-11-86.3,12.4l-17.1,17.1
			c-31.2-6.4-64.9,2.4-89,26.6l-126.7,126.6c-29.7,29.7-29.7,77.9,0,107.7l14.3,14.3l-15.1,15.1l-17.4-17.4
			c-8.1-8.1-21.4-8.3-29.5-0.2c-8.3,8.3-8.2,20.8,0.1,29.1l64.5,64.5c9.3,8.1,19,8.6,29.1,0c8.3-8.3,8.3-20.8,0-29.1l-17.7-17.7
			l15.1-15.1l14.5,14.5c30,30,78.6,30,108.6,0.1l126.2-125.9c24.6-24.5,33.4-58.9,26.5-90.5l16.6-16.6
			c23.4-23.4,27.5-58.7,12.5-86.3l81.4-81.4C491.819,27.475,492.019,14.275,483.919,6.175z M321.019,276.375l-130.4,130.4
			c-13.5,12.5-36.4,12.5-48.9,0c0,0-32.3-32.3-60.3-60.2c-12.7-12.7-12.7-33.3,0-45.9l7.2-7.2l32.3,32.3c8.3,8.3,20.8,8.3,29.1,0
			s8.3-20.8,0-29.1l-32.3-32.3l22.9-22.9l32.3,32.3c8.3,8.3,20.8,8.3,29.1,0s8.3-20.8,0-29.1l-32.3-32.3l21.8-21.8l32.3,32.3
			c8.3,8.3,20.8,8.3,29.1,0c8.3-8.3,8.3-20.8,0-29.1l-31.4-31.8c20.4-13.5,48.1-11.2,66,6.7l33.5,33.5
			C341.519,222.675,341.519,255.875,321.019,276.375z M360.719,174.275l-5.7,5.7l-44.8-44.8l5.7-5.7c12.4-12.4,32.4-12.4,44.7,0
			C373.019,141.875,373.019,161.875,360.719,174.275z"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-fuchsia-800 bg-fuchsia-100 rounded-full"
                  >{{ sumHeSoThang?.data?.hs1?.toFixed(3) || 0 }}</span
                >
              </h4>
              <div class="text-gray-500">
                Hệ Số
                <span class="text-fuchsia-600 font-bold">Tháng Này</span> Kiểu 1
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-sky-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                fill="#ffffff"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490.039 490.039"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M483.919,6.175c-8.3-8.3-20.8-8.2-29.1,0.1l-81.7,81.7c-27.6-15.1-62.9-11-86.3,12.4l-17.1,17.1
			c-31.2-6.4-64.9,2.4-89,26.6l-126.7,126.6c-29.7,29.7-29.7,77.9,0,107.7l14.3,14.3l-15.1,15.1l-17.4-17.4
			c-8.1-8.1-21.4-8.3-29.5-0.2c-8.3,8.3-8.2,20.8,0.1,29.1l64.5,64.5c9.3,8.1,19,8.6,29.1,0c8.3-8.3,8.3-20.8,0-29.1l-17.7-17.7
			l15.1-15.1l14.5,14.5c30,30,78.6,30,108.6,0.1l126.2-125.9c24.6-24.5,33.4-58.9,26.5-90.5l16.6-16.6
			c23.4-23.4,27.5-58.7,12.5-86.3l81.4-81.4C491.819,27.475,492.019,14.275,483.919,6.175z M321.019,276.375l-130.4,130.4
			c-13.5,12.5-36.4,12.5-48.9,0c0,0-32.3-32.3-60.3-60.2c-12.7-12.7-12.7-33.3,0-45.9l7.2-7.2l32.3,32.3c8.3,8.3,20.8,8.3,29.1,0
			s8.3-20.8,0-29.1l-32.3-32.3l22.9-22.9l32.3,32.3c8.3,8.3,20.8,8.3,29.1,0s8.3-20.8,0-29.1l-32.3-32.3l21.8-21.8l32.3,32.3
			c8.3,8.3,20.8,8.3,29.1,0c8.3-8.3,8.3-20.8,0-29.1l-31.4-31.8c20.4-13.5,48.1-11.2,66,6.7l33.5,33.5
			C341.519,222.675,341.519,255.875,321.019,276.375z M360.719,174.275l-5.7,5.7l-44.8-44.8l5.7-5.7c12.4-12.4,32.4-12.4,44.7,0
			C373.019,141.875,373.019,161.875,360.719,174.275z"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                <span
                  class="inline-flex px-2 font-semibold leading-5 text-sky-800 bg-fuchsia-100 rounded-full"
                  >{{ sumHeSoThang?.data?.hs2?.toFixed(3) || 0 }}</span
                >
              </h4>
              <div class="text-gray-500">
                Hệ Số
                <span class="text-sky-600 font-bold">Tháng Này</span> Kiểu 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { defineProps } from 'vue';
const { sumHeSoThang } = defineProps(['sumHeSoThang']);
</script>
