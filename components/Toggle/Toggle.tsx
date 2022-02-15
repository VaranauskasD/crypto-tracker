import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import { Switch } from '@mui/material'
import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import { ThemeContext } from '../../contexts'

interface ToggleProps {
  label: string
}

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.alternate};
`

const StyledButton = styled.button``

const StyledSwitch = styled.span``

export const Toggle = (props: ToggleProps) => {
  const { isDark, setIsDark } = useContext(ThemeContext)

  const handleChange = (e: React.MouseEvent<HTMLElement>) => {
    setIsDark(!isDark)
  }

  return (
    <ToggleWrapper>
      <StyledSpan> {isDark ? <FaMoon /> : <BsFillSunFill />}</StyledSpan>
      <StyledButton
        type="button"
        role="switch"
        aria-checked={`${!isDark}`}
        aria-label={props.label}
        onClick={(e: React.MouseEvent<HTMLElement>) => handleChange(e)}
      >
        <StyledSwitch />
      </StyledButton>
    </ToggleWrapper>
  )
}
