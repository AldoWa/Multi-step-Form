import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";

import BoxInfo from "../components/step4/BoxInfo.vue";
import Step4 from "../components/step4/Step4.vue";

const generateData = () => ({
  data: {
    personalInformation: {
      name: 'Teste',
      email: 'teste@teste.com',
      phone: '79999999',
      githubLink: 'github.com/link'
    },
    skill: 'Beginner',
    value: {
      preference: 'angular'
    },
    preference: 'angular'
  }
})

describe("Step 4", () => {
  describe('BoxInfo', () => {
    it('Should match with the snapshot', () => {
      const wrapper = mount(BoxInfo, {
        props: {
          title: 'Title',
          value: 'Value'
        }
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Step 4', () => {
    it('Should render all box with data', async () => {
      const wrapper = mount(Step4, {
        global: {
          provide: {
            data: generateData()
          }
        }
      })

      const [fullName, emailAddress, phoneNumber, _, skilLevel, preference] = wrapper.findAllComponents(BoxInfo)
      
      expect(fullName.props('value')).toBe('Teste')
      expect(emailAddress.props('value')).toBe('teste@teste.com')
      expect(phoneNumber.props('value')).toBe('79999999')
      expect(skilLevel.props('value')).toBe('Beginner')
      expect(preference.props('value')).toBe('AngularJs')
    })

    it('Should match with the snapshot', () => {
      const wrapper = mount(Step4, {
        props: {
          title: 'Title',
          value: 'Value'
        },
        global: {
          provide: {
            data: generateData()
          }
        }
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})