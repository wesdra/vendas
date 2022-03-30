import Script from "next/script"
const GoogleAnalytics = () => (
    <>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-J2T81LMTJV"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-J2T81LMTJV');
                `}
        </Script>
    </>
)

export { GoogleAnalytics }