import { inject } from "vue"

import { MultiStepProvide } from '../types/provide';

export default function useInject(): MultiStepProvide {
  const { changePersonalInformation, data, changeSkill  } = inject('data') as MultiStepProvide
  
  return {
    data,
    changePersonalInformation,
    changeSkill,
  }
}