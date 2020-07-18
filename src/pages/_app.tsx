import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Locale, Localization } from '@/translations/types';
import { getInitialLocale } from '@/translations/getInitialLocale';
import {
  getLocalizationPropsWithNamespace,
  LanguageProvider,
} from '@/context/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const lang = route?.query?.lang;
  const localization = getLocalizationPropsWithNamespace(
    lang as Locale,
    'home'
  ) as Localization;

  useEffect(() => {
    const { pathname } = route;
    const isRoot = pathname === '/';
    if (isRoot) {
      window.location.replace(`/${getInitialLocale()}`);
    }
  }, [route]);

  return (
    <LanguageProvider localization={localization}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
