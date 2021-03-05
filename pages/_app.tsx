import React from 'react'
import '../css/index.css'
import type { AppProps } from 'next/app'
import  Head  from 'next/head'
import { SWRConfig } from 'swr'
export default function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <SWRConfig 
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
      }}
    >
        <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/pokemon-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="Pokédex created using create-react-app"
        />
        <link rel="apple-touch-icon" href="/pokemon-logo.svg" />
        <title>Pokédecks | React App</title>
    </Head>
        <nav className="p-3 w-full h-1/10 flex items-center justify-between z-10 bg-white shadow-lg">
            <h1 className="text-4xl font-bold text-black" >Pokédecks</h1>
        </nav>
        <Component {...pageProps} key={router.pathname} />
    </SWRConfig>
  ) 
}