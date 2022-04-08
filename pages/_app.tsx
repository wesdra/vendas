import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ToastProvider } from 'react-toast-notifications';
import React from 'react';
import { Router } from 'next/router';
import NProgress from "nprogress"

import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  /* ... */


  return (<>
    {/* <NextNProgress /> */}
    <ToastProvider placement="bottom-center">
      <Component {...pageProps} />
    </ToastProvider>
    
    </>
    )
}

export default MyApp
