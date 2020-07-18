import Layout from '@/components/Layout';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getLocalizationProps } from '../../context/LanguageContext';
import { locales } from '@/translations/config';
import { Home } from '@/components/Home';

const IndexPage: NextPage<{}> = () => {
  return (
    <Layout title='Home | IVI 3D'>
      <Home />
    </Layout>
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

export default IndexPage;
