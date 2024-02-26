<template>
  <div class="grid grid-cols-2 gap-x-10 gap-y-6">
    <SkillCard 
      skill="Beginner"
      icon="Vegetable"
      @click="handleClickSkill('Beginner')"
    />
    <SkillCard 
      skill="Intermediate"
      icon="Compass"
      @click="handleClickSkill('Intermediate')"
    />
    <SkillCard 
      skill="Advanced"
      icon="Rocket"
      @click="handleClickSkill('Advanced')"
    />
    <SkillCard 
      skill="Expert"
      icon="Trophy"
      @click="handleClickSkill('Expert')"
    />
  </div>
</template>

<script setup lang="ts">
import SkillCard from './SkillCard.vue'
import useInject from '../../composables/inject.ts'
import { Skill } from '../../types/consts';

const { changeSkill } = useInject()

const handleClickSkill = (skill: Skill) => {
  changeSkill(skill)
}

</script>
