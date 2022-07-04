<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";

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
  password: string().required().min(8).label("Your Password"),
});

const initialValues = { email: "", password: "" };
</script>

<template>
  <div class="flex flex-col md:flex-row w-full overflow-x-hidden">
    <div class="w-full md:w-1/2 h-screen order-last md:order-first">
      <div class="h-full flex flex-col items-center justify-center space-y-5">
        <h1 class="text-6xl uppercase font-serif">
          <span class="text-7xl">V</span>alidate
        </h1>
        <h3 class="text-2xl font-semibold text-gray-800">Login</h3>
        <p class="text-gray-700 font-serif">Get connected with everything!</p>
        <VeeForm
          class=""
          :initial-values="initialValues"
          :validation-schema="schema"
          v-slot="{ meta: formMeta, handleSubmit }"
          ><form
            @submit.prevent="handleSubmit($event, onSubmit)"
            class="flex flex-col items-center space-y-4 w-[17rem]"
          >
            <VInput
              name="email"
              placeholder="Enter your email"
              type="email"
              required
            >
              <template #icon><IconUser class="text-gray-500 w-4" /></template>
            </VInput>
            <VInput
              name="password"
              placeholder="Enter your password"
              type="password"
              required
            >
              <template #icon><IconKey class="text-gray-500 w-4" /></template>
            </VInput>
            <div
              class="flex w-full justify-between text-sm text-gray-700 font-sans"
            >
              <div class="flex items-center space-x-2">
                <input type="checkbox" class="cursor-pointer" />
                <span>Remember</span>
              </div>
              <div class="cursor-pointer">Lost Password?</div>
            </div>
            <TheButton type="submit" :disabled="!formMeta.valid"
              >Submit</TheButton
            >
            <NuxtLink to="/signup" class="text-sm text-purple-900 cursor-pointer"
              >Signup here</NuxtLink
            >
          </form>
        </VeeForm>
      </div>
    </div>
    <div class="w-full md:w-1/2 h-screen relative bg-green-600">
    <img src="~/assets/images/login.jpg" class="absolute w-full h-full top-0 left-0 object-cover"/>
      <div class="flex items-center z-30 space-x-3 absolute top-8 right-10">
        <div
          class="flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-300 cursor-pointer"
        >
          <IconBag class="w-4 h-4 text-white" />
        </div>
        <NuxtLink to="/" class="text-white font-mono cursor-pointer">Home</NuxtLink>
        <NuxtLink to="/signup" class="text-white font-mono cursor-pointer">Signup</NuxtLink>
        
        <div>
          <IconHamburger class="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>
