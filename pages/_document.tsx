import { albertusNova } from 'components/fonts'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${albertusNova.variable} font-albertus-nova`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
