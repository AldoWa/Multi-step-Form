<template>
  <div class="grid grid-cols-2 gap-x-10 gap-y-6">
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
      label="AngularJS"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomCheckbox from './CustomCheckbox.vue';

const valueLocal = ref('')

</script>
