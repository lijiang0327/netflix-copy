'use client'

import { Button as NextButton, extendVariants } from '@nextui-org/react'

export const Button = extendVariants(NextButton, {
  variants: {
    color: {
      primary: 'bg-button-primary-bg text-button-primary-text',
    },
    size: {
      sm: `px-2 py-1 sm:px-4 sm:py-2 min-w-unit-20 text-xs sm:text-sm font-normal 
        gap-unit-2 rounded-[4px] font-[600]`,
      md: `px-4 py-2 min-w-unit-20 text-md font-semibold 
        gap-unit-2 rounded-[4px] font-[600]`,
      lg: `px-3 sm:px-6 py-1 sm:py-3 min-w-unit-20 text-lg sm:text-2xl font-semibold 
      gap-unit-2 rounded-[4px] font-[600] `
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'sm',
  },
})

Button.displayName = 'Button'
