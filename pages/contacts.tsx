import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Contacts } from '../src/components/contacts';
import Head from 'next/head';

const AboutPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('contacts', 'Контакты')}</title>
        <meta name="description" content="contacts" />
      </Head>
      <Contacts />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default AboutPage;
