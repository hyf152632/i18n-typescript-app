import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import {
  getLocalizationProps,
  LanguageProvider,
} from '../../context/LanguageContext';
import { Localization } from '../../translations/types';
import { locales } from '../../translations/config';

const AboutPage: NextPage<{
  localization: Localization;
}> = ({ localization }) => {
  return (
    <LanguageProvider localization={localization}>
      <Layout title='Home | Next.js + TypeScript Example'>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href='/'>
            <a>Go home</a>
          </Link>
        </p>
      </Layout>
    </LanguageProvider>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'home');
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default AboutPage;
