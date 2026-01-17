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

// Configuration des polices
const remanFont = localFont({
  src: '../fonts/Reman.ttf', // Attention au chemin ici aussi
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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// 2. Le layout est async
export default async function RootLayout({ children, params }: Props) {
  // 3. On attend (await) les paramètres avant de les utiliser
  const { locale } = await params;

  // Récupération des messages de traduction
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
        {/* HIERARCHIE IMPORTANTE POUR EVITER LES ERREURS :
            1. NextIntlClientProvider (pour les traductions)
            2. Provider (votre composant qui contient MantineProvider)
            3. Les composants enfants (AlcoolBanner, children...)
        */}
        <NextIntlClientProvider messages={messages}>
          <Provider>
            {/* AlcoolBanner est ICI, DANS le Provider, donc il a accès à Mantine */}
            <AlcoolBanner />
            {children}
          </Provider>
        </NextIntlClientProvider>
        
        <Analytics />
      </body>
    </html>
  );
}