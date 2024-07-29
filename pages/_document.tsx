import { albertusNova } from "@/fonts";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="Calyx Chronicles"
          content="Welcome to Petals Studio (Formerly Rivea World Private Limited), the creative force behind the captivating app, Calyx Chronicle. As a pioneering gaming company, we specialize in developing seasonal games and engaging multiplayer experiences that connect players from all corners of the world."
        />

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
