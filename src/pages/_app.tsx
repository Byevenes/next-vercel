import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { MainLayout } from '../components/layouts/MainLayout'
import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(theme.config);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={theme.config}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
