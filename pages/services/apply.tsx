import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ServicesApply } from '../../src/components/services';
import Head from 'next/head';

const CooperationPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t('services', 'Услуги')} | {t('apply', 'Подать заявку')}
        </title>
        <meta name="description" content="apply" />
      </Head>
      <ServicesApply />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default CooperationPage;
