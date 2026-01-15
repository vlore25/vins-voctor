import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import Provider from './components/provider/Provider';
import localFont from 'next/font/local';
import '@mantine/core/styles.css';
import { Cinzel } from 'next/font/google'; // 1. IMPORT GEIST
import { Analytics } from '@vercel/analytics/next';

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
        <ColorSchemeScript />
      </head>
      <body >
        <Provider >{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}