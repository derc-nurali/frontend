import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { get } from 'lodash';
import { About } from '../../src/components/about';
import { ApiActivities, ApiPosts, ApiStaff } from '../../src/http';
import { ABOUT_PAGES_ID } from '../../src/constants/pages-id.constants';

interface AboutPageProps {
  data: Record<string, any>;
}

const AboutPage: NextPage<AboutPageProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('about', 'О центре')}</title>
        <meta name="description" content="about" />
      </Head>
      <About data={data} />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const aboutPagesId = get(ABOUT_PAGES_ID, [locale], ABOUT_PAGES_ID.ru);
  const [about, cooperation, leaders, activities] = await Promise.all([
    ApiPosts.fetchOne(aboutPagesId.about, { embed: 'cover' }).catch((res) => res),
    ApiPosts.fetchOne(aboutPagesId.cooperation, { embed: 'cover' }).catch((res) => res),
    ApiStaff.fetchAll({
      language: locale,
      department: 'LEADERSHIP',
      embed: 'cover',
      order: '-weight',
    }),
    ApiActivities.fetchAll({
      language: locale,
      embed: 'cover',
      exclude: 'description',
      order: '-id',
    }),
  ]);

  return {
    props: {
      data: { about, cooperation, leaders, activities },
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default AboutPage;
