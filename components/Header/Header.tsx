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
    <div className={clsx(
      'absolute top-0 w-full z-20 flex items-center justify-center',
      className
    )}>
      <div className="flex items-center justify-between sm:box-content px-0 sm:px-8 md:px-12 py-6 w-[calc(100%-48px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-64px)] lg:w-[calc(83.33%-96px)] xl:w-[calc(66.66%-96px)] mx-0 sm:mx-auto">
        <Link href='/'>
          <NetflixIcon width={148} height={40} className='text-text-red h-[24px] w-[89px] md:w-[148px] md:h-[40px]' />
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <LanguageDropdown />
          <Button size='sm'>Sign In</Button>
        </div>
      </div>
    </div >
  )
}
