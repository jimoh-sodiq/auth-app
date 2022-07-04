<template>
  <button
    class="w-full h-9 font-sans rounded-full text-white text-sm bg-gradient-to-r from-purple-900 to-purple-400 disabled:hover:bg-opacity-100 disabled:cursor-not-allowed  mx-auto hover:bg-opacity-75  outline-none bg-purple-600  py-1 select-none"
    v-bind="$attrs"
  >
    <slot>Submit</slot>
  </button>
</template>
