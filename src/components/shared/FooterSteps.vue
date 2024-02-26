<template>
  <footer class="flex"
    :class="isFirstStep ? 'justify-end' : 'justify-between'"
  >
    <Button
      variant="outline"
      v-if="!isFirstStep"
      @click="() => emit('click', 'back')"
    >Go Back</Button>
    <Button
      :type="stepIsLast ? 'submit' : 'button'"
      @click="() => emit('click', 'next')"
    >{{ stepIsLast ? 'Submit' : 'Next Step' }}</Button>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Button from './Button.vue';
import { Steps } from '../../types/consts';

interface FooterStepsProps {
  actualStep: number;
}

interface FooterStepsEmit {
  (e: 'click', type: 'back' | 'next'): void
}

const props = defineProps<FooterStepsProps>()

const isFirstStep = computed(() => {
  return props.actualStep === Steps.step1;
})

const stepIsLast = computed(() => {
  return props.actualStep === Steps.step4;
})

const emit = defineEmits<FooterStepsEmit>()

</script>
