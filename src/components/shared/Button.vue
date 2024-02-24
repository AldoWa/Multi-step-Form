<template>
  <button 
    :class="cn(buttonVariants({ variant: props.variant, class: props.class }))"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority"
import { ButtonHTMLAttributes } from "vue";
import { cn } from "../../utils";


const buttonVariants = cva(
  "py-[10px] px-[26px] rounded-lg font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#FC6C4C] focus:ring-opacity-50 transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-[#FC6C4C] text-white",
        outline: "bg-transparent border-2 border-[#FC6C4C] text-[#FC6C4C]",
      },
    },
    defaultVariants: {
      variant: "default",
    }
  }
) 

type ButtonProps = {
  variant?: 'default' | 'outline';
  class?: ButtonHTMLAttributes['class'];
  type?: ButtonHTMLAttributes['type'];
}; 

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  type: 'button',
});
</script>
