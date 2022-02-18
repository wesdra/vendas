import Script from "next/script"
import '../styles/globals.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script type="text/javascript" src="./js/tiktok.js" /> 
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
