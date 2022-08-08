<script setup>
import { object, string, boolean, ref as yupRef } from "yup";
import { configure, useField, useForm } from "vee-validate";

definePageMeta({
  layout: false,
});

function navigate() {
  return navigateTo({
    path: "/success",
  });
}
const schema = object({
  email: string().required("bros put something make you no collect oo").email("omo no be email be this?").label("Email Address"),
  password: string().required().min(8).label("Your Password"),
  phone: string().required().label("Your Phone Number"),
  cars: boolean().required().isTrue(),
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    cars: true,
    email: "initial@gmail.com",
  },
});

const onSubmit = handleSubmit((values) => {
  console.log("submit", values);
});

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

// const initialValues = { email: "", phone: "" };

const { errorMessage: emailError, value: email } = useField("email");
const { errorMessage: passwordError, value: password } = useField("password");
const { errorMessage: phoneError, value: phone } = useField("phone");
const { value: cars } = useField("cars");
// we can remove errorMessage and put error.email or something else gotten from errors in useForm e.g cars field
</script>

<template>
  <section>
    <NuxtLayout name="auth-layout">
      <template #route-link>Create account</template>
      <section class="flex items-center justify-center">
        <form class="w-[400px]" @submit="onSubmit">
          {{ email }} {{ password }} {{ phone }}
          <AuthInput
            title="Email"
            type="email"
            placeholder="E.g jimoh@gmail.com"
            v-model="email"
            :errorMessage="emailError"
          />
          <AuthInput
            title="Password"
            type="password"
            placeholder="E.g Acg44__de23"
            v-model="password"
            :errorMessage="passwordError"
          />
          Remember me:
          <input v-model="cars" type="checkbox" />
          <p class="space-x-2 text-[12px] text-[#E02B1D]" v-if="errors.cars">
            <span>O</span><span>{{ errors.cars }}</span>
          </p>
          <div class="w-full">
            <div class="flex flex-col mb-1">
              <span class="text-[16px] mb-2">Phone</span>

              <VueTelInput
                v-model="phone"
                class="rounded-[6px] mb-1 py-2 px-6 ring-1 ring-black/[0.12] outline-[#536DFE] focus:outline-[#536DFE] bg-transparent focus:bg-[#536DFE]/[14%]"
              />
              <p class="space-x-2 text-[12px] text-[#E02B1D]" v-if="phoneError">
                <span>O</span><span>{{ phoneError }}</span>
              </p>
            </div>
          </div>
          <!-- <TraqTelInput title="phone" v-model:phoneValue="phone" :errorMessage="phoneError"/> -->
          <TheButton type="submit">Submit</TheButton>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </form>
      </section>
    </NuxtLayout>
  </section>
</template>
