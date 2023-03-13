import '../styles/globals.scss'
import Template from '@/components/layout/template'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
const router = useRouter()

  useEffect(()=>{
    router.push('/login')
  },[])
  return <Template><Component {...pageProps} /></Template>
}
