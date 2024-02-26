<template>
  <div class="mb-6">
    <h1 class="font-medium text-2xl mb-1">{{ title }}</h1>
    <p class="text-sm text-[#6B7280] font-normal">{{ descripton }}</p>
  </div>
</template>

<script setup lang="ts">

interface TitleStepsProps {
  title: string;
  descripton: string;
}

defineProps<TitleStepsProps>()
</script>