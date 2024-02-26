<template>
  <div class="grid grid-cols-3 gap-y-5 gap-x-6">
    <BoxInfo
      title="Full name"
      :value="data.personalInformation.name"
    ></BoxInfo>
    <BoxInfo
      title="Email Address"
      :value="data.personalInformation.email"
    ></BoxInfo>
    <BoxInfo
      title="Phone Number"
      :value="data.personalInformation.phone"
    ></BoxInfo>
    <BoxInfo
      title="Portfolio/GitHub Link"
      :value="data.personalInformation.githubLink"
    ></BoxInfo>
    <BoxInfo
      title="Skill Level"
      :value="data.skill"
    ></BoxInfo>
    <BoxInfo
      title="Challenge Preference"
      :value="formattedPreference"
    ></BoxInfo>
  </div>
</template>

<script setup lang="ts">
import BoxInfo from './BoxInfo.vue';

import useInject from '../../composables/inject';
import { computed } from 'vue';

const { data } = useInject()

const formattedPreference = computed(() => {
  const preferesFormatted = {
    html: 'HTML/CSS/JS',
    react: 'ReactJs',
    angular: 'AngularJs',
    vue: 'Vue.js'
  }

  return preferesFormatted[data.value.preference]
})
</script>
