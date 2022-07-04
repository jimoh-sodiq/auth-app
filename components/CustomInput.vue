<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    required: true,
    type: String,
    default: "text",
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div
    class="flex flex-col border-gray-500 border-[1.5px] w-full rounded-md px-2 space-y-1"
  >
    <label class="text-xs capitalize text-gray-600 font-semibold">{{
      label
    }}</label>
    <VeeField :name="name" v-slot="{ field }">
      <input
        v-bind="field"
        class="outline-none text-sm font-semibold"
        :type="type"
      />
    </VeeField>
  </div>
  <VeeErrorMessage :name="name" as="span" class="text-xs lowercase text-rose-600 px-1" />
</template>
