import { describe, expect, it } from "vitest";

import Input from "../components/step1/Input.vue";
import { mount } from "@vue/test-utils";

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
})