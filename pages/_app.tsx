import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Component {...pageProps} />
     {/* <Script
        id="show-banner"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            const usesDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false;
            const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
            const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');
            
            function switchIcon(usesDarkMode) {
              if (!usesDarkMode) { 
                lightSchemeIcon.remove();
                document.head.append(darkSchemeIcon);
              } else {
                document.head.append(lightSchemeIcon);
                darkSchemeIcon.remove();
              }
            }
            
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => switchIcon(e.matches));
            switchIcon(usesDarkMode);
          `,
        }}
      /> */}
    </>
  )
}
