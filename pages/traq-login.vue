<template>
  <section>
    <NuxtLayout name="auth-layout">
      <template #route-link> Login </template>
      <section class="flex items-center justify-center">
        <VeeForm
          class=""
          :initial-values="initialValues"
          :validation-schema="schema"
          v-slot="{ meta: formMeta, handleSubmit }"
        >
          <form
            @submit.prevent="handleSubmit($event, onSubmit)"
            class="w-[513px] max-w-[513px] gap-y-[30px]"
          >
            <h2 class="font-[500] text-[28px] mb-[12px]">Get Started</h2>
            <TraqInput
              type="email"
              title="Email"
              placeholder="E.g jimoh@gmail.com"
            />
            <TraqTelInput
              type="text"
              title="Phone number"
              placeholder="Enter a phone number"

            />
            <TheButton class="mt-10" type="submit" :disabled="!formMeta.valid"
              >Submit</TheButton
            >
            <!-- <VueTelInput></VueTelInput> -->
          </form>
        </VeeForm>
        <!-- <VueTelInput v-model="phoneValue"></VueTelInput> -->
        <!-- <span>{{ phoneError }}</span> -->
      </section>
    </NuxtLayout>
  </section>
</template>

<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
import { useField } from 'vee-validate';


definePageMeta({
  layout: false,
});

function isRequired(value) {
  // ...
   if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}
const phone = ref("")
const { errorMessage:phoneError, value:phoneValue } = useField('phone', isRequired);

function navigate() {
  return navigateTo({
    path: "/success",
  });
}


const onSubmit = (values) => {
  console.log(JSON.stringify(values, null, 2));
  navigate();
};

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const schema = object({
  email: string().required().email(),
  phone: string().required(),
});

const initialValues = { email: "", phone: "" };
</script>
