<template>
  <button class="flex border border-gray-300 rounded-[10px] py-4 px-[18px] items-center"
    @click="emit('click', level)"
  >
    <div class="block rounded-full bg-[#FC6C4C] p-2">
      <component 
        :is="icons[icon]"
      ></component>
    </div>
    <span class="text-sm font-medium text-gray-900 ml-4">{{ level }}</span>
  </button>
</template>

<script setup lang="ts">
  import Compass from './icons/Compass.vue'
  import Vegetable from './icons/Vegetable.vue'
  import Rocket from './icons/Rocket.vue'
  import Trophy from './icons/Trophy.vue'
  
  type Level = "Beginner" | "Intermediate" | "Advanced" | "Expert"

  interface SkillCardProps {
    icon: "Compass" | "Vegetable" | "Rocket" | "Trophy"
    level: Level
  }

  interface SkillCardEmits {
    (e: 'click', level: Level): void
  }

  const icons = {
    Compass,
    Vegetable,
    Rocket,
    Trophy
  }

  defineProps<SkillCardProps>()

  const emit = defineEmits<SkillCardEmits>()
</script>
