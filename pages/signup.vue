<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";

function navigate(){
  return navigateTo({
    path: '/success',
  })
}

const onSubmit = (values) => {
  console.log(JSON.stringify(values, null, 2));
  navigate()
};

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const schema = object({
  email: string().required().email(),
  password: string().required().min(8).label("Your Password"),
  confirmed: string()
    .required()
    .oneOf([yupRef("password")], "Passwords do not match") //Cross-Field Validation
    .label("Your Confirmation Password"),
});

const initialValues = { email: "", password: "", confirmed: "" };
</script>

<template>
  <div
    class="w-screen h-screen overflow-hidden flex flex-col gap-y-4 items-center justify-center"
  >
    <VeeForm
      class="w-[90%] max-w-[300px]"
      :initial-values="initialValues"
      :validation-schema="schema"
      v-slot="{ meta: formMeta, handleSubmit }"
    >
      <form
        @submit.prevent="handleSubmit($event,onSubmit)"
        class="flex flex-col w-full gap-3"
      >
        <h1
          class="text-center mb-2 font-semibold text-xl text-gray-600 font-mono"
        >
          Sign up
        </h1>
        <CustomInput name="email" label="email" type="email" required />
        <CustomInput
          name="password"
          label="password"
          type="password"
          required
        />
        <CustomInput
          name="confirmed"
          label="confirm"
          type="password"
          required
        />
        <TheButton type="submit" :disabled="!formMeta.valid">Submit</TheButton>
      </form>
    </VeeForm>
    <p class="text-sm text-gray-600 text-center">
      Already have an account? login  <NuxtLink to="/login" class="text-purple-500">here</NuxtLink>
    </p>
  </div>
</template>
