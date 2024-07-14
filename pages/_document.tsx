import { albertusNova } from "@/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          id="light-scheme-icon"
          rel="shortcut icon"
          href="/petalIcon.png"
        />
        {/* <link id="dark-scheme-icon" rel="shortcut icon" href="/petals-favicon-black.png" /> */}
      </Head>
      <body className={`${albertusNova.variable} font-albertus-nova`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
