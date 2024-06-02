import clsx from 'clsx'
import { FC } from 'react'
import Link from 'next/link'

import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown'
import { Button } from '../Button/Button'
import { NetflixIcon } from '../Icons/Netflix'

export interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className={clsx(
        "flex items-center justify-between max-w-[1440px] w-full px-12 py-6",
        className
      )}>
        <Link href='/'>
          <NetflixIcon width={148} height={40} className='text-text-red' />
        </Link>
        <div className="flex items-center gap-6">
          <LanguageDropdown />
          <Button size='sm'>Sign In</Button>
        </div>
      </div>
    </div>
  )
}
