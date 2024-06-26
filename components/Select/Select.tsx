'use client'

import { Select as NextSelect, extendVariants } from '@nextui-org/react'

export const Select = extendVariants(NextSelect, {
  variants: {
    color: {
      primary: {
        innerWrapper: "text-text-white",
        trigger: "!bg-transparent border-1 rounded-md border-border-gray hover:bg-transparent",
        value: "text-text-white",
        selectorIcon: "text-text-white",
        popoverContent: "bg-transparent bg-bg-black"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
})

Select.displayName = 'Select'
