<script setup>
defineProps({
  name: {
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
});
</script>

<template>
  <div class="w-full">
    <div
      class="w-full h-10 rounded-full flex items-center justify-center px-1 bg-gray-200"
    >
      <div
        class="bg-white flex items-center justify-center h-9 w-9 rounded-full"
      >
        <slot name="icon"></slot>
      </div>

      <VeeField :name="name" v-slot="{ field }">
        <input
          v-bind="field"
          :type="type"
          :placeholder="placeholder"
          class="h-full outline-none text-sm bg-gray-200 flex-1 rounded-full px-3"
        />
      </VeeField>
    </div>

    <VeeErrorMessage
      :name="name"
      as="span"
      class="text-xs lowercase text-rose-600 px-1"
    />
  </div>
</template>
