<template>
  <div class="container h-screen w-full flex items-center justify-center mx-auto">
    <div class="bg-white drop-shadow-3xl py-8 px-7 rounded-2xl">
      <StepsComponent
        :actualStep="+actualStep"
      ></StepsComponent>
      <div class="w-full h-[1px] bg-gray-200 my-8"></div>
      <TitleSteps
        :title="components[+actualStep - 1].title"
        :descripton="components[+actualStep - 1].description"
      />
      <Step1></Step1>
      <div class="w-full h-[1px] bg-gray-200 my-8"></div>
      <FooterSteps 
        :actualStep="+actualStep"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import StepsComponent from './components/header-steps/Steps.vue'

import Step1 from './components/step1/Step1.vue'

import TitleSteps from './components/shared/TitleSteps.vue';
import FooterSteps from './components/shared/FooterSteps.vue';

import { Steps } from './types/consts'

import useProvider from './composables/provider'

const actualStep = ref(`${Steps.step1}`)

const components = ref([
  {
    title: 'Personal Information',
    description: 'Please provide your personal details so we can get to know you better.',
    step: Steps.step1
  },
  {
    title: 'Skill Level',
    description: 'Please tell us about your skill level in frontend development.',
    step: Steps.step2
  },
  {
    title: 'Challenge Preference',
    description: 'Please tell us which frontend challenges you would like to participate in.',
    step: Steps.step3
  },
  {
    title: 'Review and Confirm',
    description: 'Please review your information to make sure everything is accurate.',
    step: Steps.step4
  }
])

useProvider()
</script>

