<template>
  <div class="flex flex-col" data-test="input-container">
    <label 
      htmlFor="input"
      class="text-sm font-medium text-[#111827] mb-2"
    >
      {{ label }}
    </label>
    <input
      class="
        border-2 
        border-gray-300 
        rounded-[10px] 
        h-10
        p-2 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#FC6C4C] 
        focus:border-transparent
        placeholder-gray-400
        hover:cursor-pointer
      "
      :type="type" 
      name="input"
      id="input"
      :autocomplete="autocomplete"
      @input="emitValue"
      :value="modelValue"
      :placeholder="placeholder"
      v-maska:[options]
    >
  </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska'
import { reactive } from 'vue';

interface InputProps {
  label: string
  modelValue: string
  autocomplete?: string;
  type: string;
  placeholder: string;
  mask?: string | string[];
}


const props = defineProps<InputProps>()

const options = reactive({
  mask: props.mask,
  eager: true
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

</script>
