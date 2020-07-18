import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import {
  getLocalizationProps,
  LanguageProvider,
} from '../../../context/LanguageContext';
import { User } from '../../../interfaces';
import { sampleUserData } from '../../../../utils/sample-data';
import Layout from '../../../components/Layout';
import List from '../../../components/List';
import { locales } from '../../../translations/config';
import { Localization } from '../../../translations/types';

type Props = {
  items: User[];
  localization: Localization;
};

const Users = ({ items, localization }: Props) => (
  <LanguageProvider localization={localization}>
    <Layout title='Users List | Next.js + TypeScript Example'>
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href='/'>
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  </LanguageProvider>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  const localization = getLocalizationProps(ctx, 'home');
  return { props: { items, localization } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default Users;
