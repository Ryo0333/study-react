import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main title="about" />
    </div>
  )
}
