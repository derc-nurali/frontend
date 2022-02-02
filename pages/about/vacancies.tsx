import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Vacancies } from '../../src/components/vacancies';
import { ApiVacancies } from '../../src/http';

interface VacanciesPageProps {
  data: Record<string, any>;
}

const VacanciesPage: NextPage<VacanciesPageProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t('about', 'О центре')} | {t('vacancies', 'Вакансии')}
        </title>
        <meta name="description" content="vacancies" />
      </Head>
      <Vacancies data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const data = await ApiVacancies.fetchAll({ language: locale }).catch((res) => res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default VacanciesPage;
