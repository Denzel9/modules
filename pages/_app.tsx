import Layout from '@/app/components/layout/Layout'
import LoadPage from '@/app/components/screens/load/loadPage'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState(true)
  setTimeout(() => setLoad(false), 2000)
  return load ? (
    <LoadPage />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
