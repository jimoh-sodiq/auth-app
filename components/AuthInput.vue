<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    required: true,
    type: String,
    default: "text",
  },
  modelValue: {
    required: true,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col mb-1">
      <span class="text-[16px] mb-2">{{ title }}</span>
      
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :type="type"
        class="rounded-[6px] mb-1 py-2 px-6 ring-1 ring-black/[0.12] outline-[#536DFE] bg-transparent focus:bg-[#536DFE]/[14%]"
      />
      <p class="space-x-2 text-[12px] text-[#E02B1D]" v-if="errorMessage">
        <span>O</span><span>{{ errorMessage }}</span>
      </p>
    </div>
  </div>
</template>
