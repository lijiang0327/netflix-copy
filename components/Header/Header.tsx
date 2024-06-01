import { Image } from '@nextui-org/react'

import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown'
import { Button } from '../Button/Button'

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-[1440px] mx-auto px-12 py-6">
      <Image src="/images/png/logo.png" alt="Netflix" width={148} height={40} />
      <div className="flex items-center gap-4">
        <LanguageDropdown />
        <Button>Sign In</Button>
      </div>
    </div>
  )
}
