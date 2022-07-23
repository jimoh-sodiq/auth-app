<script setup lang="ts">
type Theme = "system" | "light" | "dark";

const colorMode = useColorMode();
const setColorTheme = (newTheme: Theme) => {
  colorMode.preference = newTheme;
};
</script>

<template>
  <div class="flex flex-col items-center w-screen h-screen pt-[100px] dark:bg-gray-600">
    <div class="space-x-4">
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <button
      @click="setColorTheme('system')"
        class="uppercase dark:bg-gray-300 dark:text-gray-600 font-semibold text-sm px-8 py-2 text-center bg-gray-600 rounded text-gray-300"
      >
        System
      </button>
      <button
      @click="setColorTheme('light')"
        class="uppercase dark:bg-gray-300 dark:text-gray-600 font-semibold text-sm px-8 py-2 text-center bg-gray-600 rounded text-gray-300"
      >
        Light
      </button>
      <button
      @click="setColorTheme('dark')"
        class="uppercase dark:bg-gray-300 dark:text-gray-600 font-semibold text-sm px-8 py-2 text-center bg-gray-600 rounded text-gray-300"
      >
        Dark
      </button>
    </div>
    <h2 class="text-gray-800 dark:text-gray-300 font-semibold text-2xl text-center mt-10 mx-auto">
      this is the color mode page
    </h2>
  </div>
</template>
