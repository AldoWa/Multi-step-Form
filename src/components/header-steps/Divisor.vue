<template>
  <div class="w-[100px] h-[6px] rounded-full "
    :class="isSelected ? 'bg-[#FC6C4C]' : 'bg-[#E5E7EB]'"
  >

  </div>
</template>

<script setup lang="ts">
interface DivisorProps {
  isSelected: boolean;
}

defineProps<DivisorProps>()
</script>
