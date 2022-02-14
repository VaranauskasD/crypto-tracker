import React from 'react'

export const ThemeContext = React.createContext({
  isDark: true,
  setIsDark: (value: boolean) => {},
})
