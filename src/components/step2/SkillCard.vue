<template>
  <button class="flex border rounded-[10px] py-4 px-[18px] items-center"
    @click="emit('click', skill)"
    :class="isSelected ? 'border-[#FC6C4C]':'border-gray-300'"
  >
    <div class="block rounded-full bg-[#FC6C4C] p-2">
      <component 
        :is="icons[icon]"
      ></component>
    </div>
    <span class="text-sm font-medium text-gray-900 ml-4">{{ skill }}</span>
  </button>
</template>

<script setup lang="ts">
  import Compass from './icons/Compass.vue'
  import Vegetable from './icons/Vegetable.vue'
  import Rocket from './icons/Rocket.vue'
  import Trophy from './icons/Trophy.vue'
  
  import { Skill } from '../../types/consts.ts'

  interface SkillCardProps {
    icon: "Compass" | "Vegetable" | "Rocket" | "Trophy";
    skill: Skill;
    isSelected?: boolean;
  }

  interface SkillCardEmits {
    (e: 'click', skill: Skill): void
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
