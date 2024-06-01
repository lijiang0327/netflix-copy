'use client'

import { Button as NextButton } from '@nextui-org/react'
import { extendVariants } from '@nextui-org/system-rsc'

const Button = extendVariants(NextButton, {
  variants: {
    color: {
      primary: 'bg-button-primary-bg text-button-primary-text',
    },
    size: {
      sm: `px-unit-4 py-unit-2 min-w-unit-20 text-sm font-normal 
        gap-unit-2 rounded-[4px] font-[500]`,
      md: `px-unit-4 py-unit-2 min-w-unit-20 text-md font-semibold 
        gap-unit-2 rounded-[8px] font-[500]`,
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'sm',
  },
})

Button.displayName = 'Button'

export { Button }
