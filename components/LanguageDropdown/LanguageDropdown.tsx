'use client'

import { SelectItem } from '@nextui-org/react'
import { LanguageIcon } from '@heroicons/react/20/solid'
import { useParams } from 'next/navigation'
import { ChangeEventHandler } from 'react'

import { useRouter, usePathname } from '@/navigation'
import { Select } from '@/components/Select/Select'

export const LanguageDropdown = () => {
  const { locale } = useParams()
  const router = useRouter()
  const pathName = usePathname()

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    router.push(pathName, { locale: e.target.value })
  }

  return <div>
    <Select
      defaultSelectedKeys={[locale as string]}
      size="sm"
      className='w-[120px]'
      startContent={<LanguageIcon width={24} height={24} />}
      selectedKeys={[locale as string]}
      onChange={handleChange}
      aria-label='language'
    >
      <SelectItem className='bg-transparent' key="en" value="en">English</SelectItem>
      <SelectItem key="zh" value="zh">中文</SelectItem>
    </Select>
  </div>
}
