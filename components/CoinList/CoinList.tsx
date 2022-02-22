import React from 'react'
import styled from 'styled-components'
import { Coin, CoinProps } from '../Coin'

interface CoinListProps {
  coins: CoinProps[]
}

const CoinListWrapper = styled.div`
  width: 100%;
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`

export const CoinList = (props: { coins: CoinProps[] }) => {
  return (
    <CoinListWrapper>
      <StyledList>
        {props.coins &&
          props.coins.map((coin: CoinProps, index) => (
            <Coin key={index} {...coin} />
          ))}
      </StyledList>
    </CoinListWrapper>
  )
}
