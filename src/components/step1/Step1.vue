<template>
  <div class="grid grid-cols-2 gap-6 mt-6">
    <Input 
      label="Nome" 
      v-model="personalInformation.nome"
      type="text"
      placeholder="Richard Rasmunse"
    />
    <Input 
      label="Email Address" 
      v-model="personalInformation.email"
      type="email"
      autocomplete="email"
      placeholder="name@email.com"
    />
    <Input 
      label="Phone Number" 
      v-model="personalInformation.phone"
      type="text"
      autocomplete="tel"
      placeholder="(79) 988129628"
    />
    <Input 
      label="Github Link" 
      v-model="personalInformation.github"
      type="text"
      autocomplete="url"
      placeholder="github.com/richardrasmunse"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from './Input.vue';

const personalInformation = ref({
  nome: '',
  email: '',
  phone: '',
  github: '',
})

</script>
