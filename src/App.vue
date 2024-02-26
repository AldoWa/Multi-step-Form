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
      <KeepAlive :max="4">
        <component
          :is="components[+actualStep - 1].step"
        />
      </KeepAlive>
      <div class="w-full h-[1px] bg-gray-200 my-8"></div>
      <FooterSteps 
        :actualStep="+actualStep"
        @click="changeSteps"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';

import StepsComponent from './components/header-steps/Steps.vue'

import Step1 from './components/step1/Step1.vue'
import Step2 from './components/step2/Step2.vue'
import Step3 from './components/step3/Step3.vue'
import Step4 from './components/step4/Step4.vue'

import TitleSteps from './components/shared/TitleSteps.vue';
import FooterSteps from './components/shared/FooterSteps.vue';

import { Steps } from './types/consts'

import useProvider from './composables/provide'

const actualStep = ref(`${Steps.step1}`)

const components = ref([
  {
    title: 'Personal Information',
    description: 'Please provide your personal details so we can get to know you better.',
    step: shallowRef(Step1)
  },
  {
    title: 'Skill Level',
    description: 'Please tell us about your skill level in frontend development.',
    step: shallowRef(Step2)
  },
  {
    title: 'Challenge Preference',
    description: 'Please tell us which frontend challenges you would like to participate in.',
    step: shallowRef(Step3)
  },
  {
    title: 'Review and Confirm',
    description: 'Please review your information to make sure everything is accurate.',
    step: shallowRef(Step4)
  }
])

function changeSteps(type: 'back' | 'next') {
  if(type === 'back') {
    actualStep.value = `${+actualStep.value - 1}`
    return;
  } 
  actualStep.value = `${+actualStep.value + 1}`
}

useProvider()
</script>

