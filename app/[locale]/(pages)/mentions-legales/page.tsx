import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../../i18n/routing';

export default function MentionsLegales() {
  const t = useTranslations('LegalNotice');

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-justify">
      <h1 className="text-3xl font-bold mb-8 text-center brand-text">
        {t('title')}
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('editor.title')}</h2>
        <p>{t('editor.text')}</p>
        <p>{t('editor.address')}</p>
        
        <p>{t('editor.siret')}</p>
        <p>{t('editor.rcs')}</p>
        <p>{t('editor.tva')}</p>
        
        <p>{t('editor.contact')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('hosting.title')}</h2>
        <p>{t('hosting.text')}</p>
        <p>{t('hosting.address')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('ip.title')}</h2>
        <p>{t('ip.text')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('alcohol.title')}</h2>
        <p className="font-medium text-red-800">
          {t('alcohol.text')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('privacy.title')}</h2>
        <p>
          {t.rich('privacy.text', {
            link: (chunks) => (
              <Link href="/politique-de-confidentialite" className="underline text-brand-bordeaux hover:text-black">
                {chunks}
              </Link>
            )
          })}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{t('liability.title')}</h2>
        <p>{t('liability.text')}</p>
      </section>
    </div>
  );
}