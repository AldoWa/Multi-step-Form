import { inject } from "vue"

import { MultiStepProvide } from '../types/provide';

export default function useInject () {
  const { changePersonalInformation, data } = inject('data') as MultiStepProvide
  
  return {
    data,
    changePersonalInformation,
  }
}