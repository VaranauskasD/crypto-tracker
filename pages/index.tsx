import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import type { NextPage } from 'next'
import Head from 'next/head'

import { Coin, GetCoins } from '../config/coingecko'
import styles from '../styles/Home.module.css'
import { PageLayout, CoinList } from '../components'

const Home: NextPage<{ coins: Coin[] }> = (props: { coins: Coin[] }) => {
  const [currency, setCurrency] = useState('USD')
  const [loading, setLoading] = useState(false)
  return (
    <React.Fragment>
      <Head>
        <title>Crypto Tracker</title>
        <meta name="description" content="Crypto Tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <CoinList coins={props.coins} />
      </PageLayout>
    </React.Fragment>
  )
}

Home.getInitialProps = async () => {
  const { data } = await axios.get(GetCoins('USD'))
  return { coins: data }
}

export default Home
