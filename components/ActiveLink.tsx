import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import { MenuItemType } from './Navbar/types';

export const ActiveLink: FC<MenuItemType> = ({ text, href }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <Text cursor={'pointer'} {...asPath === href && { textDecorationLine: 'underline', textDecorationColor: 'white' }}>
        {text}
      </Text>
    </Link>
  )
}
