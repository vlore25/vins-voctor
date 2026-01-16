import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import Provider from './components/provider/Provider';
import localFont from 'next/font/local';
import '@mantine/core/styles.css';
import { Cinzel } from 'next/font/google'; // 1. IMPORT GEIST
import { Analytics } from '@vercel/analytics/next';
import { CookieBanner } from './components/CookieBanner/CookieBanner';
import AlcoolBanner from './components/AlcoolBanner/AlcoolBanner';

export const metadata = {
  title: 'Vins Voctor',
  description: 'Vigneron de la vallée de la rhône',
};

// Your local font
const remanFont = localFont({
  src: './fonts/Reman.ttf',
  weight: '300',
  style: 'normal',
  display: 'swap',
  variable: '--font-reman',
});

const CinzelFont = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${remanFont.variable} ${CinzelFont.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="WE1EoMwiyjxUA3n-oNKzUJKPvrGD25oRUBMKtJAtTJs" />
        <ColorSchemeScript />
      </head>
      <body >
        <Provider >
          <AlcoolBanner/>
          {children}
          </Provider>
        <Analytics />
      </body>
    </html>
  );
}