<template>
  <div class="grid grid-cols-2 gap-6 mt-6">
    <Input 
      label="Full name" 
      v-model="personalInformationLocal.name"
      type="text"
      placeholder="Richard Rasmunse"
    />
    <Input 
      label="Email Address" 
      v-model="personalInformationLocal.email"
      type="email"
      autocomplete="email"
      placeholder="name@email.com"
    />
    <Input 
      label="Phone Number" 
      v-model="personalInformationLocal.phone"
      type="text"
      autocomplete="tel"
      placeholder="(79) 988129628"
    />
    <Input 
      label="Github Link" 
      v-model="personalInformationLocal.githubLink"
      type="text"
      autocomplete="url"
      placeholder="github.com/richardrasmunse"
    />
  </div>
</template>

<script setup lang="ts">
import {  ref, watch } from 'vue';

import Input from './Input.vue';
import { DataProvide } from '../../types/provide';

import useInject from '../../composables/inject';

type PersonalInformation = DataProvide['personalInformation']

const personalInformationLocal = ref<PersonalInformation>({
  name: '',
  email: '',
  phone: '',
  githubLink: '',
})

watch(personalInformationLocal, (newVal: PersonalInformation) => {
  changePersonalInformation(newVal)
}, { deep: true })

const { changePersonalInformation } = useInject()

</script>
