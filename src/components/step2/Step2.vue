<template>
  <Container>
    <SkillCard 
      skill="Beginner"
      :isSelected="data.skill === 'Beginner'"
      icon="Vegetable"
      @click="handleClickSkill('Beginner')"
    />
    <SkillCard 
      skill="Intermediate"
      icon="Compass"
      :isSelected="data.skill === 'Intermediate'"
      @click="handleClickSkill('Intermediate')"
    />
    <SkillCard 
      skill="Advanced"
      icon="Rocket"
      :isSelected="data.skill === 'Advanced'"
      @click="handleClickSkill('Advanced')"
    />
    <SkillCard 
      skill="Expert"
      icon="Trophy"
      :isSelected="data.skill === 'Expert'"
      @click="handleClickSkill('Expert')"
    />
  </Container>
</template>

<script setup lang="ts">
import SkillCard from './SkillCard.vue'

import useInject from '../../composables/inject.ts'

import { Skill } from '../../types/consts';

import Container from '../shared/Container.vue';

const { changeSkill, data } = useInject()

const handleClickSkill = (skill: Skill) => {
  changeSkill(skill)
}
</script>
