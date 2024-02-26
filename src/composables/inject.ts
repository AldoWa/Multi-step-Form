import { inject } from "vue"

import { MultiStepProvide } from '../types/provide';

export default function useInject(): MultiStepProvide {
  const { changePersonalInformation, data, changeSkill, changePreference  } = inject('data') as MultiStepProvide
  
  return {
    data,
    changePersonalInformation,
    changeSkill,
    changePreference,
  }
}