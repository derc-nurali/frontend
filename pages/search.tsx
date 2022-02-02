import { get } from 'lodash';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Search } from '../src/components/search';
import { ApiPosts } from '../src/http';
import { DEFAULT_PAGE, DEFAULT_PAGE_ITEMS } from '../src/constants/base.constants';
import { CATEGORY_PAGE } from '../src/constants/posts-categories.constants';

interface SearchPageProps {
  data: Record<string, any>;
}

const SearchPage: NextPage<SearchPageProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('search', 'Поиск')}</title>
        <meta name="description" content="search" />
      </Head>
      <Search data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale, query = {} }: any) => {
  const page = get(query, ['page'], DEFAULT_PAGE);
  const take = get(query, ['take'], DEFAULT_PAGE_ITEMS);
  const excludeCategories = CATEGORY_PAGE;

  const data = await ApiPosts.fetchAll({
    language: locale,
    embed: 'categories,cover',
    exclude: 'description',
    skip: parseInt(take) * (page - 1),
    excludeCategories,
    take,
    ...query,
  }).catch((res) => res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default SearchPage;
