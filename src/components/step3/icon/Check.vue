<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    :class="class"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_17_8)">
      <path
        d="M3.33325 8L6.66659 11.3333L13.3333 4.66667"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_17_8">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
  interface CheckIconProps {
    class: string
  }

  defineProps<CheckIconProps>()
</script>
