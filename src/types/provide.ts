export type DataProvide = {
  personalInformation: {
    name: string;
    email: string;
    phone: string;
    githubLink: string;
  }
}

export type MultiStepProvide = {
  data: DataProvide;
  changePersonalInformation: (personalInformation: DataProvide['personalInformation']) => void;
}