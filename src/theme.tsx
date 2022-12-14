import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

export const theme = extendTheme({
  colors: {
    black: '#16161D',
    primary: {
      active: '#37a169',
    },
  },
  fonts,
  breakpoints,
  config,
})
