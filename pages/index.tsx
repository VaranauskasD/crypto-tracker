import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Coin, CoinList } from '../config/coingecko'
import styles from '../styles/Home.module.css'
import { PageLayout, Coin as StyledCoin } from '../components'

const Home: NextPage<{ coins: Coin[] }> = (props: { coins: Coin[] }) => {
  const [currency, setCurrency] = useState('USD')
  // const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)

  // const fetchCoins = async () => {
  //   setLoading(true)
  //   const { data } = await axios.get(CoinList('USD'))
  //   setCoins(data)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchCoins()
  // }, [currency])
  return (
    <React.Fragment>
      <Head>
        <title>Crypto Tracker</title>
        <meta name="description" content="Crypto Tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        {props.coins &&
          props.coins.map((coin: Coin) => <StyledCoin {...coin} />)}
      </PageLayout>
    </React.Fragment>
  )
}

Home.getInitialProps = async () => {
  const { data } = await axios.get(CoinList('USD'))
  return { coins: data }
}

export default Home
