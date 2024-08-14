import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "CV Fabrice Magnan de Bellevue",
  description: "Découvrez le CV complet de Fabrice Magnan de Bellevue, un développeur web full stack spécialisé en HTML, CSS, SASS, JavaScript, React, Vite.js, PHP, et PHPMyAdmin.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "CV Fabrice Magnan de Bellevue",
    description: "Le CV en ligne de Fabrice Magnan de Bellevue, développeur web full stack avec une expertise en HTML, CSS, SASS, JavaScript, React, Vite.js, PHP, et PHPMyAdmin.",
    url: "https://my-resume.fabwebprojects.fr/", 
    siteName: "CV de Fabrice Magnan de Bellevue",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV de Fabrice Magnan de Bellevue",
    description: "Le CV en ligne de Fabrice Magnan de Bellevue, développeur web full stack avec une expertise en HTML, CSS, SASS, JavaScript, React, Vite.js, PHP, et PHPMyAdmin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-43LQQ38FF0`}
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-43LQQ38FF0');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZ3G8QMH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        </body>
    </html>
  );
}
