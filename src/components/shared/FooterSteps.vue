<template>
  <footer class="flex"
    :class="isFirstStep ? 'justify-end' : 'justify-between'"
  >
    <Button
      variant="outline"
      v-if="!isFirstStep"
    >Go Back</Button>
    <Button
      :type="stepIsLast ? 'submit' : 'button'"
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

const props = defineProps<FooterStepsProps>()

const isFirstStep = computed(() => {
  return props.actualStep === Steps.step1;
})

const stepIsLast = computed(() => {
  return props.actualStep === Steps.step4;
})

</script>
