<script setup>
const tryForm = () => {
  alert("try the form first");
};
</script>
<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <h1 class="text-gray-600 text-2xl font-semibold mb-5">Homepage</h1>
    <div class="flex items-center gap-x-10">
      <span @click="tryForm" class="cursor-pointer">Success</span>
      <NuxtLink to="/signup">Sign Up</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
    <p class="text-sm mt-10 text-rose-500">The submitted values can be seen in the console</p>
  </div>
</template>
