<template>
  <div class="sticky bg-gray-200 top-0">
    <h3 class="text-3xl font-medium text-gray-700">
      Kiểm tra thông tin
      <i>
        {{ formatDate(new Date(), 'dd/mm/yyyy') }}
      </i>
    </h3>

    <div class="mt-1 py-2 border-b-4 border-cyan-300">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-red-300 bg-opacity-75 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 130 130"
                id="calendar"
                height="32px"
                width="32px"
              >
                <rect
                  width="125"
                  height="111.88"
                  x="2.5"
                  y="14.95"
                  fill="#c8dff5"
                  rx="6.64"
                ></rect>
                <path
                  fill="#b4cadb"
                  d="M127.49,21.58v98.61a6.63,6.63,0,0,1-6.62,6.64H9.13a6.6,6.6,0,0,1-6.39-4.9H118.88a2.62,2.62,0,0,0,2.61-2.64V15A6.61,6.61,0,0,1,127.49,21.58Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M120.86,128.33H9.14A8.15,8.15,0,0,1,1,120.2V21.59a8.15,8.15,0,0,1,8.14-8.14H120.86A8.15,8.15,0,0,1,129,21.59V120.2A8.15,8.15,0,0,1,120.86,128.33ZM9.14,16.45A5.14,5.14,0,0,0,4,21.59V120.2a5.14,5.14,0,0,0,5.14,5.13H120.86A5.14,5.14,0,0,0,126,120.2V21.59a5.14,5.14,0,0,0-5.14-5.14Z"
                ></path>
                <path
                  fill="#5ba1e1"
                  d="M127.5,40.35V21.59A6.64,6.64,0,0,0,120.86,15H9.14A6.64,6.64,0,0,0,2.5,21.59V40.35Z"
                ></path>
                <path
                  fill="#def4fc"
                  d="M127.49,21.58v5.78a6.63,6.63,0,0,0-6.62-6.64H9.13a6.63,6.63,0,0,0-6.62,6.64V21.58A6.62,6.62,0,0,1,9.13,15H120.87A6.62,6.62,0,0,1,127.49,21.58Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M129,41.85H1V21.59a8.15,8.15,0,0,1,8.14-8.14H120.86A8.15,8.15,0,0,1,129,21.59Zm-125-3H126V21.59a5.14,5.14,0,0,0-5.14-5.14H9.14A5.14,5.14,0,0,0,4,21.59Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="70.23"
                  y="97.77"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M83,112H70.23a1.5,1.5,0,0,1-1.5-1.5V97.77a1.5,1.5,0,0,1,1.5-1.5H83a1.5,1.5,0,0,1,1.5,1.5v12.74A1.5,1.5,0,0,1,83,112Zm-11.25-3h9.75V99.27H71.73Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="47.02"
                  y="97.77"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M59.77,112H47a1.5,1.5,0,0,1-1.5-1.5V97.77a1.5,1.5,0,0,1,1.5-1.5H59.77a1.5,1.5,0,0,1,1.5,1.5v12.74A1.5,1.5,0,0,1,59.77,112Zm-11.25-3h9.75V99.27H48.52Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="23.81"
                  y="97.77"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M36.56,112H23.81a1.5,1.5,0,0,1-1.5-1.5V97.77a1.5,1.5,0,0,1,1.5-1.5H36.56a1.5,1.5,0,0,1,1.5,1.5v12.74A1.5,1.5,0,0,1,36.56,112Zm-11.25-3h9.75V99.27H25.31Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="93.44"
                  y="76.17"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M106.19,90.42H93.44a1.5,1.5,0,0,1-1.5-1.5V76.17a1.5,1.5,0,0,1,1.5-1.5h12.75a1.5,1.5,0,0,1,1.5,1.5V88.92A1.5,1.5,0,0,1,106.19,90.42Zm-11.25-3h9.75V77.67H94.94Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="70.23"
                  y="76.17"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M83,90.42H70.23a1.5,1.5,0,0,1-1.5-1.5V76.17a1.5,1.5,0,0,1,1.5-1.5H83a1.5,1.5,0,0,1,1.5,1.5V88.92A1.5,1.5,0,0,1,83,90.42Zm-11.25-3h9.75V77.67H71.73Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="47.02"
                  y="76.17"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M59.77,90.42H47a1.5,1.5,0,0,1-1.5-1.5V76.17a1.5,1.5,0,0,1,1.5-1.5H59.77a1.5,1.5,0,0,1,1.5,1.5V88.92A1.5,1.5,0,0,1,59.77,90.42Zm-11.25-3h9.75V77.67H48.52Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="23.81"
                  y="76.17"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M36.56,90.42H23.81a1.5,1.5,0,0,1-1.5-1.5V76.17a1.5,1.5,0,0,1,1.5-1.5H36.56a1.5,1.5,0,0,1,1.5,1.5V88.92A1.5,1.5,0,0,1,36.56,90.42Zm-11.25-3h9.75V77.67H25.31Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="93.44"
                  y="54.58"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M106.19,68.82H93.44a1.5,1.5,0,0,1-1.5-1.5V54.58a1.5,1.5,0,0,1,1.5-1.5h12.75a1.5,1.5,0,0,1,1.5,1.5V67.32A1.5,1.5,0,0,1,106.19,68.82Zm-11.25-3h9.75V56.08H94.94Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="70.23"
                  y="54.58"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M83,68.82H70.23a1.5,1.5,0,0,1-1.5-1.5V54.58a1.5,1.5,0,0,1,1.5-1.5H83a1.5,1.5,0,0,1,1.5,1.5V67.32A1.5,1.5,0,0,1,83,68.82Zm-11.25-3h9.75V56.08H71.73Z"
                ></path>
                <rect
                  width="12.75"
                  height="12.75"
                  x="47.02"
                  y="54.58"
                  fill="#5ba1e1"
                ></rect>
                <path
                  fill="#2481d7"
                  d="M59.77,68.82H47a1.5,1.5,0,0,1-1.5-1.5V54.58a1.5,1.5,0,0,1,1.5-1.5H59.77a1.5,1.5,0,0,1,1.5,1.5V67.32A1.5,1.5,0,0,1,59.77,68.82Zm-11.25-3h9.75V56.08H48.52Z"
                ></path>
                <path
                  fill="#5ba1e1"
                  d="M102.86,3.17A5.07,5.07,0,0,0,97.8,8.23V17.5a5.07,5.07,0,1,0,10.13,0V8.23A5.07,5.07,0,0,0,102.86,3.17Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M102.86,24.07a6.56,6.56,0,0,1-6.56-6.56V8.23a6.57,6.57,0,0,1,13.13,0v9.28A6.57,6.57,0,0,1,102.86,24.07Zm0-19.4A3.57,3.57,0,0,0,99.3,8.23v9.28a3.57,3.57,0,0,0,7.13,0V8.23A3.57,3.57,0,0,0,102.86,4.67Z"
                ></path>
                <path
                  fill="#5ba1e1"
                  d="M65,3.17a5.07,5.07,0,0,0-5.07,5.06V17.5a5.07,5.07,0,1,0,10.14,0V8.23A5.07,5.07,0,0,0,65,3.17Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M65,24.07a6.57,6.57,0,0,1-6.57-6.56V8.23a6.57,6.57,0,0,1,13.14,0v9.28A6.57,6.57,0,0,1,65,24.07Zm0-19.4a3.57,3.57,0,0,0-3.57,3.56v9.28a3.57,3.57,0,0,0,7.14,0V8.23A3.57,3.57,0,0,0,65,4.67Z"
                ></path>
                <path
                  fill="#5ba1e1"
                  d="M27.14,3.17a5.07,5.07,0,0,0-5.07,5.06V17.5a5.07,5.07,0,1,0,10.13,0V8.23A5.07,5.07,0,0,0,27.14,3.17Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M27.14,24.07a6.57,6.57,0,0,1-6.57-6.56V8.23a6.57,6.57,0,0,1,13.13,0v9.28A6.56,6.56,0,0,1,27.14,24.07Zm0-19.4a3.57,3.57,0,0,0-3.57,3.56v9.28a3.57,3.57,0,0,0,7.13,0V8.23A3.57,3.57,0,0,0,27.14,4.67Z"
                ></path>
              </svg>
            </div>

            <div class="mx-5 w-full text-center">
              <h4 class="text-2xl font-semibold text-gray-700">
                Tháng {{ formatDate(new Date(), 'mm') }}
              </h4>
              <div class="flex justify-between">
                <div>
                  <p>Số khách</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >{{ sumHeSoThang?.data?.ksl || 0 }}</span
                    >
                  </p>
                </div>
                <div>
                  <p>Số người thân</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full"
                      >{{ sumHeSoThang?.data?.ntsl || 0 }}</span
                    >
                  </p>
                </div>
                <div>
                  <p>HS 1</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-fuchsia-800 bg-fuchsia-100 rounded-full"
                      >{{ sumHeSoThang?.data?.hs1?.toFixed(3) || 0 }}</span
                    >
                  </p>
                </div>
                <div>
                  <p>HS 2</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-sky-800 bg-sky-100 rounded-full"
                      >{{ sumHeSoThang?.data?.hs2?.toFixed(3) || 0 }}</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-yellow-300 bg-opacity-75 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 130 130"
                id="calendar"
                height="32px"
                width="32px"
              >
                <rect
                  width="125"
                  height="111.88"
                  x="2.5"
                  y="14.95"
                  fill="#c8dff5"
                  rx="6.64"
                ></rect>
                <path
                  fill="#b4cadb"
                  d="M127.49,21.58v98.61a6.63,6.63,0,0,1-6.62,6.64H9.13a6.6,6.6,0,0,1-6.39-4.9H118.88a2.62,2.62,0,0,0,2.61-2.64V15A6.61,6.61,0,0,1,127.49,21.58Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M120.86,128.33H9.14A8.15,8.15,0,0,1,1,120.2V21.59a8.15,8.15,0,0,1,8.14-8.14H120.86A8.15,8.15,0,0,1,129,21.59V120.2A8.15,8.15,0,0,1,120.86,128.33ZM9.14,16.45A5.14,5.14,0,0,0,4,21.59V120.2a5.14,5.14,0,0,0,5.14,5.13H120.86A5.14,5.14,0,0,0,126,120.2V21.59a5.14,5.14,0,0,0-5.14-5.14Z"
                ></path>
                <path
                  fill="#5ba1e1"
                  d="M127.5,40.35V21.59A6.64,6.64,0,0,0,120.86,15H9.14A6.64,6.64,0,0,0,2.5,21.59V40.35Z"
                ></path>
                <path
                  fill="#def4fc"
                  d="M127.49,21.58v5.78a6.63,6.63,0,0,0-6.62-6.64H9.13a6.63,6.63,0,0,0-6.62,6.64V21.58A6.62,6.62,0,0,1,9.13,15H120.87A6.62,6.62,0,0,1,127.49,21.58Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M129,41.85H1V21.59a8.15,8.15,0,0,1,8.14-8.14H120.86A8.15,8.15,0,0,1,129,21.59Zm-125-3H126V21.59a5.14,5.14,0,0,0-5.14-5.14H9.14A5.14,5.14,0,0,0,4,21.59Z"
                ></path>
                
                <path
                  fill="#5ba1e1"
                  d="M102.86,3.17A5.07,5.07,0,0,0,97.8,8.23V17.5a5.07,5.07,0,1,0,10.13,0V8.23A5.07,5.07,0,0,0,102.86,3.17Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M102.86,24.07a6.56,6.56,0,0,1-6.56-6.56V8.23a6.57,6.57,0,0,1,13.13,0v9.28A6.57,6.57,0,0,1,102.86,24.07Zm0-19.4A3.57,3.57,0,0,0,99.3,8.23v9.28a3.57,3.57,0,0,0,7.13,0V8.23A3.57,3.57,0,0,0,102.86,4.67Z"
                ></path>
                <path
                  fill="#5ba1e1"
                  d="M65,3.17a5.07,5.07,0,0,0-5.07,5.06V17.5a5.07,5.07,0,1,0,10.14,0V8.23A5.07,5.07,0,0,0,65,3.17Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M65,24.07a6.57,6.57,0,0,1-6.57-6.56V8.23a6.57,6.57,0,0,1,13.14,0v9.28A6.57,6.57,0,0,1,65,24.07Zm0-19.4a3.57,3.57,0,0,0-3.57,3.56v9.28a3.57,3.57,0,0,0,7.14,0V8.23A3.57,3.57,0,0,0,65,4.67Z"
                ></path>
                <path
                  fill="#5ba1e1"
                  d="M27.14,3.17a5.07,5.07,0,0,0-5.07,5.06V17.5a5.07,5.07,0,1,0,10.13,0V8.23A5.07,5.07,0,0,0,27.14,3.17Z"
                ></path>
                <path
                  fill="#2481d7"
                  d="M27.14,24.07a6.57,6.57,0,0,1-6.57-6.56V8.23a6.57,6.57,0,0,1,13.13,0v9.28A6.56,6.56,0,0,1,27.14,24.07Zm0-19.4a3.57,3.57,0,0,0-3.57,3.56v9.28a3.57,3.57,0,0,0,7.13,0V8.23A3.57,3.57,0,0,0,27.14,4.67Z"
                ></path>
                <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-weight="bold"  font-size="50" fill="#000">DAY</text>
              </svg>
            </div>

            <div class="mx-5 w-full text-center">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ formatDate(active_date, 'dd/mm/yyyy') }}
              </h4>
              <div class="flex justify-between">
                <div>
                  <p>Số khách</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >{{ sumHeSoNgay?.data?.ksl || 0 }}</span
                    >
                  </p>
                </div>
                <div>
                  <p>Số người thân</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-orange-800 bg-orange-100 rounded-full"
                      >{{ sumHeSoNgay?.data?.ntsl || 0 }}</span
                    >
                  </p>
                </div>
                <div>
                  <p>HS 1</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-fuchsia-800 bg-fuchsia-100 rounded-full"
                      >{{ sumHeSoNgay?.data?.hs1?.toFixed(3) || 0 }}</span
                    >
                  </p>
                </div>
                <div>
                  <p>HS 2</p>
                  <p>
                    <span
                      class="inline-flex px-2 font-semibold leading-5 text-sky-800 bg-sky-100 rounded-full"
                      >{{ sumHeSoNgay?.data?.hs2?.toFixed(3) || 0 }}</span
                    >
                  </p>
                </div>
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
defineProps(['sumHeSoThang', 'sumHeSoNgay', 'active_date', 'formatDate']);
</script>
