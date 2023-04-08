import '@/styles/globals.sass'
import {
  Libre_Baskerville as LibreBaskerville,
  Noto_Serif_JP as NotoSerifJP,
} from '@next/font/google'
import smoothscroll from 'smoothscroll-polyfill'
import type { AppProps } from 'next/app'

import styles from '@/pages/App.module.sass'

// Google Fonts
const notoSerifJP = NotoSerifJP({
  weight: ['400', '700'],
  variable: '--font-noto-serif-jp',
  preload: false,
})

const libreBaskerville = LibreBaskerville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
})

// Smooth Scroll Polyfill
if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <main className={[styles.wrapper, libreBaskerville.variable, notoSerifJP.variable].join(' ')}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
