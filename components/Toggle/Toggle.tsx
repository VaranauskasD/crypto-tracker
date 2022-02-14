import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import { ThemeContext } from '../../contexts'

interface ToggleProps {
  label: string
}

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

const StyledSpan = styled.span`
  color: ${(props) => props.theme.alternate};
`

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`

export const Toggle = (props: ToggleProps) => {
  const { isDark, setIsDark } = useContext(ThemeContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(!isDark)
  }

  return (
    <Label>
      <StyledSpan> {isDark ? <FaMoon /> : <BsFillSunFill />}</StyledSpan>
      <Input
        aria-label={props.label}
        checked={!isDark}
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <Switch />
    </Label>
  )
}
