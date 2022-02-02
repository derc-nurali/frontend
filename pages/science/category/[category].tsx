import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ApiPosts } from '../../../src/http';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Posts } from '../../../src/components/posts';
import { slugToId } from '../../../src/common/utils/format-utils';
import { get } from 'lodash';
import { DEFAULT_PAGE, DEFAULT_PAGE_ITEMS } from '../../../src/constants/base.constants';

interface NewsPageProps {
  data: Record<string, any>;
}

const SciencePage: NextPage<NewsPageProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('science', 'Наука')}</title>
        <meta name="description" content="science" />
      </Head>
      <Posts data={data.hits} total={data.total} variant="science" />
    </>
  );
};

export const getServerSideProps = async ({ locale, params, query = {} }: any) => {
  const categories = params.category ? slugToId(params.category) : '';
  const page = get(query, ['page'], DEFAULT_PAGE);
  const take = get(query, ['take'], DEFAULT_PAGE_ITEMS);

  const data = await ApiPosts.fetchAll({
    language: locale,
    embed: 'categories,cover',
    exclude: 'description',
    skip: parseInt(take) * (page - 1),
    take,
    categories,
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

export default SciencePage;
