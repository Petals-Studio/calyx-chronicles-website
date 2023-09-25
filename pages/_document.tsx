import { albertusNova, poppins } from '@/fonts'
import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'

// LottiePlayer;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"
          strategy="beforeInteractive"
        /> */}
        <link id="light-scheme-icon" rel="shortcut icon" href="/petals-favicon.png" />
        {/* <link id="dark-scheme-icon" rel="shortcut icon" href="/petals-favicon-black.png" /> */}
      </Head>
      <body className={`${poppins.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
