<script setup>
defineProps({
  name: String,
})
</script>
<template>
  <svg v-if="name === 'plus'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>

  <svg v-else-if="name === 'search'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>

  <svg v-else-if="name === 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>

  <svg v-else-if="name === 'light'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>

  <svg v-else-if="name === 'system'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>

  <svg v-else-if="name === 'cheveron-down'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>

  <svg v-else-if="name === 'cheveron-right'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707" /></svg>

  <svg v-else-if="name === 'dashboard'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" /></svg>

  <svg v-else-if="name === 'office'" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z" /></svg>

  <svg v-else-if="name === 'printer'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z" /></svg>

  <svg v-else-if="name === 'trash'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" /></svg>

  <svg v-else-if="name === 'users'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" /></svg>

  <svg v-else-if="name === 'delete'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>

  <svg v-else-if="name === 'play'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>

  <svg v-else-if="name === 'stop'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" />
  </svg>

  <svg v-else-if="name === 'thumb-down'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
  </svg>

  <svg v-else-if="name === 'thumb-up'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
  </svg>

  <svg v-else-if="name === 'deezer'" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" viewBox="0 0 50 50"><path d="M 39 14 L 39 16 L 47 16 L 47 14 Z M 21 17 L 21 19 L 29 19 L 29 17 Z M 39 17 L 39 19 L 47 19 L 47 17 Z M 21 20 L 21 22 L 29 22 L 29 20 Z M 39 20 L 39 22 L 47 22 L 47 20 Z M 3 23 L 3 25 L 11 25 L 11 23 Z M 21 23 L 21 25 L 29 25 L 29 23 Z M 30 23 L 30 25 L 38 25 L 38 23 Z M 39 23 L 39 25 L 47 25 L 47 23 Z M 3 26 L 3 28 L 11 28 L 11 26 Z M 21 26 L 21 28 L 29 28 L 29 26 Z M 30 26 L 30 28 L 38 28 L 38 26 Z M 39 26 L 39 28 L 47 28 L 47 26 Z M 3 29 L 3 31 L 11 31 L 11 29 Z M 12 29 L 12 31 L 20 31 L 20 29 Z M 21 29 L 21 31 L 29 31 L 29 29 Z M 30 29 L 30 31 L 38 31 L 38 29 Z M 39 29 L 39 31 L 47 31 L 47 29 Z M 3 32 L 3 34 L 11 34 L 11 32 Z M 12 32 L 12 34 L 20 34 L 20 32 Z M 21 32 L 21 34 L 29 34 L 29 32 Z M 30 32 L 30 34 L 38 34 L 38 32 Z M 39 32 L 39 34 L 47 34 L 47 32 Z M 3 35 L 3 37 L 11 37 L 11 35 Z M 12 35 L 12 37 L 20 37 L 20 35 Z M 21 35 L 21 37 L 29 37 L 29 35 Z M 30 35 L 30 37 L 38 37 L 38 35 Z M 39 35 L 39 37 L 47 37 L 47 35 Z" /></svg>

  <svg v-else-if="name === 'spotify'" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" viewBox="0 0 48 48"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 21.103516 15.957031 C 20.389873 15.966128 19.676597 15.999862 18.964844 16.058594 C 17.066835 16.215211 15.180218 16.549094 13.332031 17.058594 A 1.50015 1.50015 0 1 0 14.128906 19.949219 C 20.796159 18.111219 28.02435 18.821382 34.261719 22.074219 A 1.50015 1.50015 0 1 0 35.648438 19.414062 C 31.106773 17.045549 26.099015 15.893354 21.103516 15.957031 z M 21.308594 22.009766 C 20.725031 22.014043 20.140835 22.038263 19.558594 22.082031 C 18.005952 22.198747 16.46251 22.455787 14.947266 22.853516 A 1.50015 1.50015 0 1 0 15.708984 25.753906 C 21.062005 24.34882 26.832615 24.930095 31.841797 27.496094 A 1.50015 1.50015 0 1 0 33.208984 24.826172 C 29.483573 22.917796 25.39353 21.979821 21.308594 22.009766 z M 21.546875 28.017578 C 21.101253 28.016517 20.655896 28.029198 20.210938 28.056641 C 19.02438 28.129821 17.84235 28.304165 16.679688 28.580078 A 1.50015 1.50015 0 1 0 17.373047 31.498047 C 21.352394 30.553701 25.596764 30.99901 29.326172 32.830078 A 1.5002142 1.5002142 0 1 0 30.648438 30.136719 C 27.784174 28.73042 24.666231 28.025008 21.546875 28.017578 z" /></svg>

  <svg v-else-if="name === 'itunes'" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" viewBox="0 0 50 50"><path d="M 13 4 C 8.0414839 4 4 8.0414839 4 13 L 4 37 C 4 41.958516 8.0414839 46 13 46 L 37 46 C 41.958516 46 46 41.958516 46 37 L 46 13 C 46 8.0414839 41.958516 4 37 4 L 13 4 z M 13 6 L 37 6 C 40.877484 6 44 9.1225161 44 13 L 44 37 C 44 40.877484 40.877484 44 37 44 L 13 44 C 9.1225161 44 6 40.877484 6 37 L 6 13 C 6 9.1225161 9.1225161 6 13 6 z M 33.560547 11.001953 C 33.450344 10.996441 33.337354 11.004324 33.224609 11.025391 L 33.222656 11.025391 L 20.630859 13.386719 C 19.691698 13.563432 19 14.397117 19 15.353516 L 19 28.986328 A 1.0001 1.0001 0 0 0 19 29 C 19 30.116666 18.116666 31 17 31 L 15.169922 31 C 13.046743 31 11.12071 32.594135 11.005859 34.787109 C 10.886899 37.073786 12.732105 39 15 39 L 15.5 39 C 18.525577 39 21 36.525577 21 33.5 L 21 29 L 21 20.455078 L 33 18.205078 L 33 26 C 33 27.116666 32.116666 28 31 28 L 29.169922 28 C 27.046743 28 25.12071 29.594135 25.005859 31.787109 C 24.886899 34.073786 26.732105 36 29 36 L 29.5 36 C 32.525577 36 35 33.525577 35 30.5 L 35 26 L 35 12.5 C 35 11.697435 34.331969 11.040538 33.560547 11.001953 z M 33 13.103516 L 33 16.169922 L 21 18.419922 L 21 15.353516 L 33 13.103516 z M 33 29.380859 L 33 30.5 C 33 32.444423 31.444423 34 29.5 34 L 29 34 C 27.847895 34 26.940913 33.063948 27.001953 31.890625 C 27.057102 30.837599 28.045101 30 29.169922 30 L 31 30 C 31.742658 30 32.401869 29.738341 33 29.380859 z M 19 32.380859 L 19 33.5 C 19 35.444423 17.444423 37 15.5 37 L 15 37 C 13.847895 37 12.940913 36.063948 13.001953 34.890625 C 13.057102 33.837599 14.045101 33 15.169922 33 L 17 33 C 17.742658 33 18.401869 32.738341 19 32.380859 z" /></svg>

  <svg v-else-if="name === 'en'" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill="#F0F0F0" />
    <g fill="#0052B4">
      <path d="m52.92 100.14c-20.109 26.163-35.272 56.318-44.101 89.077h133.18l-89.077-89.077z" />
      <path d="m503.18 189.22c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.18z" />
      <path d="m8.819 322.78c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075h-133.18z" />
      <path d="m411.86 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.18l89.076-89.075z" />
      <path d="m100.14 459.08c26.163 20.109 56.318 35.272 89.076 44.102v-133.18l-89.076 89.074z" />
      <path d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z" />
      <path d="m322.78 503.18c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.18z" />
      <path d="m370 322.78l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076h-133.18z" />
    </g>
    <g fill="#D80027">
      <path d="m509.83 222.61h-220.44v-220.44c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461 0.744-33.391 2.167v220.44h-220.44c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319 0.744 22.461 2.167 33.391h220.44v220.44c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-0.743 33.391-2.167v-220.44h220.44c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-0.744-22.461-2.167-33.391z" />
      <path d="m322.78 322.78l114.24 114.24c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482v1e-3z" />
      <path d="m189.22 322.78h-2e-3l-114.24 114.24c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804v-31.479z" />
      <path d="m189.22 189.22v-2e-3l-114.24-114.24c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z" />
      <path d="m322.78 189.22l114.24-114.24c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803v31.482z" />
    </g>
  </svg>

  <svg v-else-if="name === 'de'" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z" fill="#FFDA44" />
    <path d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z" />
    <path d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z" fill="#D80027" />
  </svg>

  <svg v-else-if="name === 'podium'" width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" fill="currentColor" fill-opacity="0.01" />
    <rect x="4" y="18" width="13" height="24" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="17" y="6" width="13" height="36" stroke="currentColor" stroke-width="4" stroke-linejoin="round" />
    <rect x="30" y="26" width="13" height="16" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  <svg v-else-if="name === 'arrow-down'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" /></svg>
  <svg v-else-if="name === 'arrow-up'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" /></svg>
</template>
