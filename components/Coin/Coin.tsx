import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export interface CoinProps {
  id: String
  ath: number
  ath_change_percentage: number
  ath_date: Date
  atl: number
  atl_change_percentage: number
  atl_date: Date
  circulating_supply: number
  current_price: number
  fully_diluted_valuation: number
  high_24h: number
  image: String
  last_updated: Date
  low_24h: number
  market_cap: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  max_supply: number
  name: String
  price_change_24h: number
  price_change_percentage_24h: number
  symbol: string
  total_supply: number
  total_volume: number
}

const CoinContainer = styled.li`
  width: 100%;
  list-style-type: none;
`

const CoinLink = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const CoinDetails = styled.div``

export const Coin = (props: CoinProps) => {
  return (
    <CoinContainer>
      <Link href={`/coin/${props.id}`} passHref={true}>
        <CoinLink>
          <span>{props.name}</span>
          <span>{props.current_price}</span>
        </CoinLink>
      </Link>
    </CoinContainer>
  )
}
