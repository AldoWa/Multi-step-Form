import { mount } from '@vue/test-utils'

import { it, describe, expect } from 'vitest'

import Button from '../components/shared/Button.vue'
import Container from '../components/shared/Container.vue'
import FooterSteps from '../components/shared/FooterSteps.vue'
import TitleSteps from '../components/shared/TitleSteps.vue'

describe('Shared', () => {
  describe('Button', () => {
    it('Should render the button with default variant and with "Button" span', () => {
      const button = mount(Button, {
        slots: {
          default: 'Button'
        }
      })

      const buttonElement = button.get('[data-test="button"]')

      expect(buttonElement.classes()).toContain('bg-[#FC6C4C]')
      expect(buttonElement.text()).toBe('Button')
    })

    it('Should render the button with outline variant and with "Outline" span', () => {
      const button = mount(Button, {
        slots: {
          default: 'Outline'
        },
        props: {
          variant: 'outline', 
        }
      })

      const buttonElement = button.get('[data-test="button"]')

      expect(buttonElement.classes()).toContain('bg-transparent')
      expect(buttonElement.text()).toBe('Outline')
    })

    it('Should match with the snapshot', () => {
      const button = mount(Button, {
        slots: {
          default: 'Button'
        }
      })

      expect(button.html()).toMatchSnapshot()
    })
  }) 

  describe('Container', () => {
    it('Should match with the snapshot', () => {
      expect(mount(Container).html()).toMatchSnapshot()
    })
  })

  describe('FooterSteps', () => {
    it('Should not render the "Go back" button', () => {
      const footerSteps = mount(FooterSteps, {
        props: {
          actualStep: 1 
        }
      })

      const footerStepsBack = footerSteps.find('[data-test="footer-steps-back"]')
      expect(footerStepsBack.exists()).toBe(false)
    })

    it('Should render the "Go back" button', () => {
      const footerSteps = mount(FooterSteps, {
        props: {
          actualStep: 2 
        }
      })

      const footerStepsBack = footerSteps.find('[data-test="footer-steps-back"]')
      expect(footerStepsBack.exists()).toBe(true)
    })

    it('Should render the "Submit" label in the next button', () => {
      const footerSteps = mount(FooterSteps, {
        props: {
          actualStep: 4
        }
      })

      const footerStepsNext = footerSteps.find('[data-test="footer-steps-next"]')
      expect(footerStepsNext.text()).toBe('Submit')
    })

    it('Should emit "click" event with "back" property', () => {
      const footerSteps = mount(FooterSteps, {
        props: {
          actualStep: 2
        }
      })
      const footerStepsBack = footerSteps.find('[data-test="footer-steps-back"]')

      footerStepsBack.trigger('click')
      expect(footerSteps.emitted('click')[0]).toEqual(['back'])
    })

    it('Should emit "click" event with "next" property', () => {
      const footerSteps = mount(FooterSteps, {
        props: {
          actualStep: 2
        }
      })

      const footerStepsNext = footerSteps.find('[data-test="footer-steps-next"]')
      footerStepsNext.trigger('click')
      expect(footerSteps.emitted('click')[0]).toEqual(['next'])
    })

    it('Should match with the snapshot', () => {
      expect(mount(FooterSteps).html()).toMatchSnapshot()
    })
  })

  describe('TitleSteps', () => {
    it('Should match with the snapshot', () => {
      expect(mount(TitleSteps).html()).toMatchSnapshot()
    })
  })
})