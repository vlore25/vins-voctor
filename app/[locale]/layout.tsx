import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import localFont from 'next/font/local';
import '@mantine/core/styles.css';
import { Cinzel } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Provider from '../components/provider/Provider';
import AlcoolBanner from '../components/AlcoolBanner/AlcoolBanner';
export const metadata = {
  title: 'Vins Voctor',
  description: 'Vigneron de la vallée de la rhône',
};

// ... vos fonts (RemanFont, CinzelFont) restent ici ...
const remanFont = localFont({
  src: '../fonts/Reman.ttf', 
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

export default async function RootLayout({
  children,
  params // 1. On ne déstructure plus ici directement
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 2. Le type est maintenant une Promise
}) {
  // 3. On attend la résolution des paramètres ici
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${remanFont.variable} ${CinzelFont.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ColorSchemeScript />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <AlcoolBanner />
            {children}
          </Provider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}