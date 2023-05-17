import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useCallback } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const foo =  1;

  const  handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Link href='/about' onClick={handleClick}>
        ボタン
      </Link>
      <Main title="index" />
    </div>
  )
}
