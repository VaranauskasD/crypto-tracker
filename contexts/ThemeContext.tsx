import * as React from 'react'

export const theme = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#FFD700',
    background: '#141414',
  },
}

export const ThemeContext = React.createContext({ theme: theme.dark })

export const ThemeProvider = (props: { children?: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme: theme.dark }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
