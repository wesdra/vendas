import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <NextNProgress />
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
    
    </>
    )
}

export default MyApp
