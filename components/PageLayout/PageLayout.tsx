import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Header } from '../Header'

interface HeaderProps {}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
`

export const PageLayout = (props: { children?: React.ReactNode }) => {
  return (
    <PageWrapper>
      <Header />
      <main>{props.children}</main>
    </PageWrapper>
  )
}
