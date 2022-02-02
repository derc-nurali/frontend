import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Structure } from '../../src/components/structure';

const StructurePage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t('about', 'О центре')} | {t('structure', 'Структура')}
        </title>
        <meta name="description" content="structure" />
      </Head>
      <Structure />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default StructurePage;
