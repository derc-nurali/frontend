import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { Home } from '../src/components/home';
import { ApiActivities } from '../src/http';
import { ApiAchievements } from '../src/http';
import { ApiPosts } from '../src/http';
import { ABOUT_PAGES_ID } from '../src/constants/pages-id.constants';
import { CATEGORY_NEWS, CATEGORY_PUBLICATION } from '../src/constants/posts-categories.constants';

interface HomePageProps {
  data: Record<string, any>;
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('site.name', 'Центр исследований цифровой экономики')}</title>
        <meta name="description" content="description" />
      </Head>
      <Home data={data} />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const categories = [CATEGORY_NEWS, CATEGORY_PUBLICATION].join(',');
  const aboutPagesId = get(ABOUT_PAGES_ID, [locale], ABOUT_PAGES_ID.ru);

  const [activities, achievements, posts, mission, goal, vision] = await Promise.all([
    ApiActivities.fetchAll({
      language: locale,
      embed: 'cover',
      exclude: 'description,steps',
      order: '-id',
    }),
    ApiAchievements.fetchAll({ language: locale, take: 999, order: '-completedAt' }),
    ApiPosts.fetchAll({
      categories,
      language: locale,
      take: 8,
      embed: 'categories,cover',
      exclude: 'description',
    }),
    ApiPosts.fetchOne(aboutPagesId.mission),
    ApiPosts.fetchOne(aboutPagesId.goal),
    ApiPosts.fetchOne(aboutPagesId.vision),
  ]).catch((res) => res);

  return {
    props: {
      data: { activities, achievements, posts, mission, goal, vision },
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default HomePage;
