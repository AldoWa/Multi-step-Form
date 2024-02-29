import { describe, expect, it, vitest } from "vitest";

import { mount } from "@vue/test-utils";

import Input from "../components/step1/Input.vue";
import Step1 from "../components/step1/Step1.vue";

describe("Step 1", () => {
  describe('Input', () => {
    it('Should render the input with the correct type, placeholder and label', () => {
      const input = mount(Input, {
        props: {
          placeholder: 'Name Placeholder',
          label: 'Name Label',
          modelValue: '',
          type: 'text'
        }
      })

      const inputElement = input.get('[data-test="input-container"]')

      expect(inputElement.get('input').attributes('placeholder')).toBe('Name Placeholder');
      expect(inputElement.get('input').attributes('type')).toBe('text');

      expect(inputElement.get('label').text()).toBe('Name Label');
    })

    it('Should change the modelValue when the input changes', async () => {
      const wrapper = mount(Input, {
        props: {
          placeholder: 'Name Placeholder',
          label: 'Name Label',
          modelValue: 'initialText',
          type: 'text',
        }
      })

      await wrapper.setProps({
        'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value }),
      })
      const input = wrapper.find('input')
      await input.setValue('New Value')

      expect(wrapper.props('modelValue')).toBe('New Value');
    })

    it('Should match with the snapshot', () => {
      const input = mount(Input, {
        props: {
          placeholder: 'Name Placeholder',
          label: 'Name Label',
          modelValue: '',
          type: 'text'
        }
      })

      expect(input.html()).toMatchSnapshot()
    })
  })

  describe('Step 1', () => {
    /**
     * It's not recommended to acess vm directly, but in this case, it's necessary to test the provider
     */
    it('Should add data to the provider', async () => {
      const wrapper = mount(Step1, {
        global: {
          provide: {
            data: {
              changePersonalInformation: vitest.fn((value) => {
                wrapper.vm.$.provides.data.personalInformation = value
              }),
              changeSkill: vitest.fn(),
              changePreference: vitest.fn(),
              personalInformation: {
                name: '',
                email: '',
                phone: '',
                githubLink: ''
              }
            }
          }
        }
      })

      const [name,email, phone, githubLink] = wrapper.findAll('input')

      await name.setValue('Name')
      await email.setValue('email@email.com')
      await phone.setValue('799999999')
      await githubLink.setValue('Link')

      expect(wrapper.vm.$.provides.data.personalInformation).toEqual({
        name: 'Name',
        email: 'email@email.com',
        phone: '(79) 9999-999',
        githubLink: 'Link'
      })
    })

    it('Should match with the snapshot', async () => {
      const wrapper = mount(Step1, {
        global: {
          provide: {
            data: {
              personalInformation: {
                name: '',
                email: '',
                phone: '',
                githubLink: ''
              }
            }
          }
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})