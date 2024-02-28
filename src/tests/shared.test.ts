import { mount } from '@vue/test-utils'

import { it, describe, expect } from 'vitest'

import Button from '../components/shared/Button.vue'

describe('Shared', () => {
  describe('Button', () => {
    it('Should render the button with default variant and with "Button" span', () => {
      const button = mount(Button, {
        slots: {
          default: 'Button'
        }
      })

      const buttonElement = button.get('[data-testid="button"]')

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

      const buttonElement = button.get('[data-testid="button"]')

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
})