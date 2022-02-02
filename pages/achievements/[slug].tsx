import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useLanguageLinks } from '../../src/hooks';
import { slugToId } from '../../src/common/utils/format-utils';
import { AchievementsDetail } from '../../src/components/achievements';
import { ApiAchievements, ApiActivities } from '../../src/http';
import { ROUTES } from '../../src/constants/routes.constants';
import { Entities } from '../../src/enums/entities.enum';

interface ActivityDetailsPageProps {
  data: Record<string, any>;
}

const ActivityDetailsPage: NextPage<ActivityDetailsPageProps> = ({ data }) => {
  const { t } = useTranslation();

  useLanguageLinks({
    entity: Entities.ACHIEVEMENT,
    id: data?.id,
    route: ROUTES.ACHIEVEMENTS.ROOT,
    api: ApiActivities,
  });

  return (
    <>
      <Head>
        <title>
          {t('achievements', 'Достижения')} | {data.title}
        </title>
        <meta name="description" content={data.shortDescription} />
      </Head>
      <AchievementsDetail data={data} />
    </>
  );
};

export const getServerSideProps = async ({ locale, params }: any) => {
  const id = slugToId(params.slug);
  const data = await ApiAchievements.fetchOneById(id, { embed: 'cover' }).catch((res) => res);

  return {
    notFound: data?.statusCode === 404,
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default ActivityDetailsPage;
