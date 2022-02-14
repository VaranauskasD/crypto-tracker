const axios = require('axios')

export interface Coin {
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

export const GetCoins = (currency: String) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
