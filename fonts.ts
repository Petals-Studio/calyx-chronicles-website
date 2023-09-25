
import localFont from 'next/font/local'
import { Inter, Poppins, Open_Sans } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const poppins = Poppins({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-poppins' })
export const openSans = Open_Sans({ subsets: ['latin'], weight: ['600'], variable: '--font-open-sans' })

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