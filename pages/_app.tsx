import type { AppProps } from 'next/app'
import { ThemeProvider, type DefaultTheme, StyleSheetManager } from 'styled-components'
import GlobalStyle from '@/components/globalstyles'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyleSheetManager enableVendorPrefixes>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyleSheetManager>
    </>
  )
}
