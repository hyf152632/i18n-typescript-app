import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import LocaleSwitcher from './LocaleSwitcher';
import useTranslation from '../hooks/useTranslation';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { t, locale } = useTranslation();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        <nav>
          <Link href='/[lang]' as={`/${locale}`}>
            <a>{t('common')['navHome']}</a>
          </Link>{' '}
          |{' '}
          <Link href='/[lang]/about' as={`/${locale}/about`}>
            <a>{t('common')['navAbout']}</a>
          </Link>{' '}
          |{' '}
          <Link href='/[lang]/users' as={`/${locale}/users`}>
            <a>{t('common')['navUsersList']}</a>
          </Link>{' '}
          |{' '}
          <Link href='/api/users'>
            <a>{t('common')['navUsersAPI']}</a>
          </Link>
        </nav>
        <LocaleSwitcher />
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
