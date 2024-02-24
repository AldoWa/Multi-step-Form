import { provide, ref } from "vue"
import { DataProvide } from "../types/provide"

export default function useProvider () {
  const data = ref({
    personalInformation: {
      name: '',
      email: '',
      phone: '',
      githubLink: '',
    },
  })
  
  const changePersonalInformation = (personalInformation: DataProvide['personalInformation']) => {
    data.value.personalInformation = personalInformation
  }

  provide('data', {
    data,
    changePersonalInformation
  })
}