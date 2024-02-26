<template>
  <div class="grid grid-cols-2 gap-x-10 gap-y-6">
    <SkillCard 
      level="Beginner"
      icon="Vegetable"
    />
    <SkillCard 
      level="Intermediate"
      icon="Compass"
    />
    <SkillCard 
      level="Advanced"
      icon="Rocket"
    />
    <SkillCard 
      level="Expert"
      icon="Trophy"
    />
  </div>
</template>

<script setup lang="ts">
import SkillCard from './SkillCard.vue'
</script>
