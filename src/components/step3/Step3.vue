<template>
  <Container>
    <CustomCheckbox 
      label="HTML/CSS/JS"
      v-model="valueLocal"
      :isChecked="valueLocal === 'html'"
      name="html"
    />
    <CustomCheckbox 
      label="ReactJs"
      v-model="valueLocal"
      :isChecked="valueLocal === 'react'"
      name="react"
    />

    <CustomCheckbox 
      label="AngularJs"
      v-model="valueLocal"
      :isChecked="valueLocal === 'angular'"
      name="angular"
    />
    <CustomCheckbox 
      label="Vue.js"
      v-model="valueLocal"
      :isChecked="valueLocal === 'vue'"
      name="vue"
    />
  </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomCheckbox from './CustomCheckbox.vue';
import Container from '../shared/Container.vue';

const valueLocal = ref('')

</script>
