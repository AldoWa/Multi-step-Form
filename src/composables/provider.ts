import { provide, ref } from "vue"
import { DataProvide, MultiStepProvide } from "../types/provide"

export default function useProvider () {
  const data = ref<DataProvide>({
    personalInformation: {
      name: '',
      email: '',
      phone: '',
      githubLink: '',
    },
    skill: 'Beginner',
    preference: 'html'
  })
  
  const changePersonalInformation = (personalInformation: DataProvide['personalInformation']) => {
    data.value.personalInformation = personalInformation;
  }

  const changeSkill = (skill: DataProvide['skill']) => {
    data.value.skill = skill;
  }

  const changePreference = (preference: DataProvide['preference']) => {
    data.value.preference = preference;
  }

  provide<MultiStepProvide>('data', {
    data,
    changePersonalInformation,
    changeSkill,
    changePreference
  })
}