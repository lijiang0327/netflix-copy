'use client'

import { SelectItem } from '@nextui-org/react'
import { LanguageIcon } from '@heroicons/react/20/solid'

import { Select } from '../Select/Select'

export const LanguageDropdown = () => {
  return <div>
    <Select
      defaultSelectedKeys={['en']}
      size="sm"
      className='w-[120px]'
      startContent={<LanguageIcon width={24} height={24} />}
    >
      <SelectItem className='bg-transparent' key="en" value="en">English</SelectItem>
      <SelectItem key="zh" value="zh">中文</SelectItem>
    </Select>
  </div>
}
