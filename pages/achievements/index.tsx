import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ApiAchievements } from '../../src/http';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Achievements } from '../../src/components/achievements';
import { get } from 'lodash';
import { DEFAULT_PAGE } from '../../src/constants/base.constants';

const ActivityPage: NextPage<{ data: Record<string, any> }> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('achievements', 'Достижения')}</title>
        <meta name="description" content="achievements" />
      </Head>
      <Achievements data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale, query = {} }: any) => {
  const page = get(query, ['page'], DEFAULT_PAGE);
  const take = get(query, ['take'], 999);

  const data = await ApiAchievements.fetchAll({
    language: locale,
    order: '-completedAt',
    skip: parseInt(take) * (page - 1),
    take,
    ...query,
  }).catch((res) => res);

  return {
    notFound: data?.statusCode === 404,
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default ActivityPage;
