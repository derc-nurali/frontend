import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ApiPosts } from '../../src/http';
import Head from 'next/head';
import { Posts } from '../../src/components/posts';
import { useTranslation } from 'next-i18next';
import { get } from 'lodash';
import { DEFAULT_PAGE, DEFAULT_PAGE_ITEMS } from '../../src/constants/base.constants';
import { CATEGORY_NEWS } from '../../src/constants/posts-categories.constants';

interface NewsPageProps {
  data: Record<string, any>;
}

const NewsPage: NextPage<NewsPageProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('news', 'Новости')}</title>
        <meta name="description" content="news" />
      </Head>
      <Posts data={data.hits} total={data.total} variant="news" />
    </>
  );
};

export const getServerSideProps = async ({ locale, query = {} }: any) => {
  const categories = [CATEGORY_NEWS].join(',');
  const page = get(query, ['page'], DEFAULT_PAGE);
  const take = get(query, ['take'], DEFAULT_PAGE_ITEMS);

  const data = await ApiPosts.fetchAll({
    categories,
    language: locale,
    embed: 'categories,cover',
    exclude: 'description',
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

export default NewsPage;
