
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// Font files can be colocated inside of `pages`
export const albertusNova = localFont({
  src: [
    {
      path: './public/fonts/AlbertusNova-Bold.woff2',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-albertus-nova',
})