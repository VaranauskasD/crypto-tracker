import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Toggle } from '../Toggle'

interface HeaderProps {}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 16px;
  width: 100%;
  background: ${(props) => props.theme.background};
`

const StyledHomeLink = styled.a`
  font-weight: bold;
  color: ${(props) => props.theme.foreground};
`

export const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <Link href="/" passHref={true}>
        <StyledHomeLink>Crypto Tracker</StyledHomeLink>
      </Link>
      <Toggle label={'Change Theme'} />
    </StyledHeader>
  )
}
