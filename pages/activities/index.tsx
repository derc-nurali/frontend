import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Activities } from '../../src/components/activities';
import { get } from 'lodash';
import { ApiActivities } from '../../src/http';
import { DEFAULT_PAGE, DEFAULT_PAGE_ITEMS } from '../../src/constants/base.constants';

const ActivitiesPage: NextPage<{ data: Record<string, any> }> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('activities', 'Деятельность')}</title>
        <meta name="description" content="activities" />
      </Head>
      <Activities data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale, query = {} }: any) => {
  const page = get(query, ['page'], DEFAULT_PAGE);
  const take = get(query, ['take'], DEFAULT_PAGE_ITEMS);

  const data = await ApiActivities.fetchAll({
    language: locale,
    embed: 'cover',
    exclude: 'description',
    order: '-id',
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

export default ActivitiesPage;
