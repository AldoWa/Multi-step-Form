<template>
  <label class="flex items-center border rounded-[10px] py-4 px-[18px] text-sm font-medium ml-4 text-gray-900 "
    :class="isChecked ? 'border-[#FC6C4C]':'border-gray-300'"
    :htmlFor="name"
  >
    <input
      :checked="isChecked"
      :id="name"
      :name="name"
      type="checkbox"
      :value="modelValue"
      @change="handleCheckbox"
      class="w-4 h-4 text-orange-500
      relative
      peer/input-check
      p-2
      appearance-none border border-gray-300 rounded-md focus:ring-orange-500 dark:focus:ring-orange-600 checked:bg-[#FC6C4C] focus:ring-2"
    />
    <span class="block ml-4">{{ label }}</span>
    <CheckIcon
     class="
      w-4 h-4
      absolute
      hidden peer-checked/input-check:block
      pointer-events-none
     "
    />
  </label>
</template>

<script setup lang="ts">
import CheckIcon from './icon/Check.vue';

interface CustomCheckboxProps {
  label: string;
  modelValue: string;
  name: string;
  isChecked?: boolean;
}

defineProps<CustomCheckboxProps>();

const emit = defineEmits(["update:modelValue"]);

function emitValue(input: HTMLInputElement) {
  if(input.checked){
    emit("update:modelValue", input.name);
    return;
  }
  emit("update:modelValue", "");
}

function handleCheckbox(e: Event) {
  const target = e.target as HTMLInputElement;
  emitValue(target)
}

</script>
