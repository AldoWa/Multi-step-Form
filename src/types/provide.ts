import { Ref } from "vue";
import { Skill } from "./consts";

export type DataProvide = {
  personalInformation: {
    name: string;
    email: string;
    phone: string;
    githubLink: string;
  }
  skill: Skill;
}

export type MultiStepProvide = {
  data: Ref<DataProvide>;
  changePersonalInformation: (personalInformation: DataProvide['personalInformation']) => void;
  changeSkill: (level: DataProvide['skill']) => void;
}