import { Inter } from 'next/font/google'
import styles from './Main.module.css'
import { Links } from '@/components/Links'
import Images from '@/components/Images'
import { Headline } from '@/components/Headline'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <div>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <Headline title={props.title}>
            <code className={styles.code}>{props.title}</code>
          </Headline>
          <Images />
        </div>
        <Links />
      </main>
    </div>
  )
}
