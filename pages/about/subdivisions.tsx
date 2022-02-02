import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Subdivisions } from '../../src/components/subdivisions';
import { ApiSubdivisions } from '../../src/http';

interface SubdivisionsPageProps {
  data: Record<string, any>;
}

const SubdivisionsPage: NextPage<SubdivisionsPageProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t('about', 'О центре')} | {t('subdivisions', 'Подразделения')}
        </title>
        <meta name="description" content="subdivisions" />
      </Head>
      <Subdivisions data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const data = await ApiSubdivisions.fetchAll({
    language: locale,
    take: 999,
    embed: 'staffs,staffs.cover',
    order: '-weight',
  }).catch((res) => res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default SubdivisionsPage;
