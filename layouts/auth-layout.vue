<template>
  <div class="bg-[#FAFEFF] min-h-screen px-[71px] relative">
    <nav class="flex justify-between items-center py-[35px] mb-[106px]">
      <div class="flex items-center justify-center gap-x-[22px]">
        <IconLogo class="w-[60px] h-[57px]" />
        <span class="font-[500] text-[28px]">Logo</span>
      </div>
      <div class="underline font-[500] text-[16px]">
        <slot name="route-link"></slot>
      </div>
    </nav>
    <slot />
  </div>
</template>
