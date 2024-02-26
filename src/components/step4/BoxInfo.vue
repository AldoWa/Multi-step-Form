<template>
  <div class="flex flex-col bg-gray-200 bg-opacity-50 rounded-xl p-4">
    <span class="text-xs text-gray-600 font-normal mb-1">{{ title }}</span>
    <span class="text-xs text-gray-900 font-medium">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
interface BoxInfoProps {
  title: string;
  value: string;
}

defineProps<BoxInfoProps>()
</script>
