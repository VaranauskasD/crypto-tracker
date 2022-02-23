import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { printIntrospectionSchema } from 'graphql'

const Home: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query
  console.log(pid)

  const [currency, setCurrency] = useState('USD')
  const [loading, setLoading] = useState(false)
  return (
    <React.Fragment>
      <Head>
        <title>Crypto Tracker</title>
        <meta name="description" content="Crypto Tracker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </React.Fragment>
  )
}

// Home.getInitialProps = async () => {
//   const { data } = await axios.get(SingleCoin('USD'))
//   return { coins: data }
// }

export default Home
