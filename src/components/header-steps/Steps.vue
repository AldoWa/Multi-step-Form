<template>
  <div class="flex items-center gap-5">
    <div v-for="step in steps" class="flex items-center gap-5">
      <Step :step="step.value" :isActualStep="actualStep >= step.value"></Step>
      <Divisor 
        :isSelected="actualStep >= step.value + 1"
        v-if="step.value !== steps[steps.length - 1].value"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Step from './Step.vue'
import Divisor from './Divisor.vue'

import { Steps } from '../../types/consts'

interface StepsProps {
  actualStep: number
}

const steps = ref(
  [
    { value: Steps.step1 },
    { value: Steps.step2 },
    { value: Steps.step3 },
    { value: Steps.step4 },
  ]
)

defineProps<StepsProps>()

</script>