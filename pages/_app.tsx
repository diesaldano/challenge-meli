import '../styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return(
   <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mercado Libre - Envíos gratis en el día</title>
        <meta name="description" content="Mercado Libre - Envíos gratis en el día" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
   </>
  )
}

export default MyApp
