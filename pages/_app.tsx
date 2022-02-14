import '../styles/globals.css'
import { useState, useContext } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeContext } from '../contexts'

const theme = {
  light: {
    foreground: '#FFD700',
    alternate: '#000000',
    background: '#eeeeee',
    background_lighter: '#ffffff',
  },
  dark: {
    foreground: '#FFD700',
    alternate: '#ffffff',
    background: '#141414',
    background_lighter: '#3b3b3b',
  },
}

const App = ({ Component, pageProps }: AppProps) => {
  const [isDark, setIsDark] = useState(true)

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <StyledThemeProvider theme={isDark ? theme.dark : theme.light}>
        <Component {...pageProps} />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
