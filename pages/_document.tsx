import { albertusNova } from "@/fonts";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Join the adventure in Calyx Chronicles, the ultimate mobile arcade multiplayer seasional game! Experience captivating storylines, fresh arcade games, and quick, exciting gameplay. Compete globally, customize your character, and unravel the mysteries of planet Calyx. Download now and conquer the world of Calyx Chronicles!"
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
