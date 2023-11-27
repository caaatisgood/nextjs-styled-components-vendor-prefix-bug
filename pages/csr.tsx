import { useEffect, useState } from "react"
import Head from 'next/head'
import Nav from "@/components/Nav"
import {
  Container,
  UnselectableText,
  Icon,
} from '@/components/sharedstyles'

export default function Csr() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 1000);
  }, [])

  return (
    <Container>
      <Head>
        <title>SC V6 - CSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1>Client-Side Rendering with styled-components v6</h1>
      {isReady ? (
        <>
          <UnselectableText>
            This is supposed to be unselectable thanks to `user-select: none;`
          </UnselectableText>
          <p>
            <Icon />
          </p>
        </>
      ) : <p>loading...</p>}
    </Container>
  )
}
