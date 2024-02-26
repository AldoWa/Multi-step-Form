import { Ref } from "vue";
import { Preference, Skill } from "./consts";

export type DataProvide = {
  personalInformation: {
    name: string;
    email: string;
    phone: string;
    githubLink: string;
  }
  skill: Skill;
  preference: Preference
}

export type MultiStepProvide = {
  data: Ref<DataProvide>;
  changePersonalInformation: (personalInformation: DataProvide['personalInformation']) => void;
  changeSkill: (level: DataProvide['skill']) => void;
  changePreference: (preference: DataProvide['preference']) => void;
}