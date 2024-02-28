import { mount } from '@vue/test-utils'

import { it, describe, expect } from 'vitest'

import Step from '../components/header-steps/Step.vue'

describe('Header Steps', () => {
  describe('Step', () => {
    it('Should render the component', () => {
      const wrapper = mount(Step, {
        props: {
          step: 1,
          isActualStep: false,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  
    it('Should render the component with the correct step', () => {
      const wrapper = mount(Step, {
        props: {
          step: 2,
          isActualStep: false,
        }
      })

      expect(wrapper.get('[data-test="step"]').text()).toBe('2')
    })

    it('Should render the actualStep', () => {
      const wrapper = mount(Step, {
        props: {
          step: 2,
          isActualStep: true,
        }
      })

      expect(wrapper.get('[data-test="step"]').classes()).toContain('bg-[#FC6C4C]')
    })
  })
})