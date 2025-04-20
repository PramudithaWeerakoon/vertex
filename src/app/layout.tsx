import type { Metadata } from 'next';
import { Coiny, Dongle, Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const coiny = Coiny({ variable: '--font-coiny', weight: '400', subsets: ['latin'] });
const dongle = Dongle({ variable: '--font-dongle', weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vertex Software | Custom Software Development",
  description: "Vertex Software Enterprise delivers custom software solutions, web applications, and e-commerce platforms with cutting-edge technologies. Expert software development services to transform your business.",
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=0',
  metadataBase: new URL('https://vertex-software-enterprise.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Vertex Software | Custom Software Development",
    description: "Expert custom software development services with modern technologies. Transform your business with scalable, robust web applications and e-commerce solutions.",
    url: 'https://vertex-software-enterprise.com',
    siteName: 'Vertex Software Enterprise',
    images: [
      {
        url: '/assets/logo.png',
        width: 800,
        height: 600,
        alt: 'Vertex Software Enterprise Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vertex Software | Custom Software Development",
    description: "Expert software development services with cutting-edge technologies for businesses of all sizes.",
    images: ['/assets/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        {/* Google Analytics Measurement ID - Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Facebook Pixel Code - Replace XXXXXXXXXXXXXXXX with your actual Pixel ID */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXX&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}
      </head>
      <body className={`${inter.className} ${coiny.variable} ${dongle.variable}`}>{children}</body>
    </html>
  );
}
