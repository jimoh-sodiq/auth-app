<template>
  <button
    class="px-6 disabled:hover:bg-opacity-100 disabled:cursor-not-allowed text-sm mx-auto hover:bg-opacity-75 font-semibold outline-none rounded-full bg-purple-600 text-gray-50 py-1 w-[70%] select-none"
    v-bind="$attrs"
  >
    <slot>Submit</slot>
  </button>
</template>
