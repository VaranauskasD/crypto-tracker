import React from 'react'
import styled from 'styled-components'
import { Coin, CoinProps } from '../Coin'

interface CoinListProps {
  coins: CoinProps[]
}

const CoinListWrapper = styled.div``

const StyledList = styled.ul``

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
