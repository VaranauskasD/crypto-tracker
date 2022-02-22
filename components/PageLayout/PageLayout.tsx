import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Header } from '../Header'

interface HeaderProps {}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
`

const PageContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
`

export const PageLayout = (props: { children?: React.ReactNode }) => {
  return (
    <PageWrapper>
      <Header />
      <PageContent>{props.children}</PageContent>
    </PageWrapper>
  )
}
