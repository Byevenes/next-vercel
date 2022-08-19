import { Center, Container, Stack } from '@chakra-ui/react'
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../Navbar'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack height='100vh' w='100vw'>
      <Navbar />
      {children}
    </Stack>
  )
}
