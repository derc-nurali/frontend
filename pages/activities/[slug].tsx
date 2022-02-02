import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useLanguageLinks } from '../../src/hooks';
import { slugToId } from '../../src/common/utils/format-utils';
import { ActivitiesDetail } from '../../src/components/activities';
import { ApiActivities } from '../../src/http';
import { ROUTES } from '../../src/constants/routes.constants';
import { Entities } from '../../src/enums/entities.enum';

interface ActivitiesDetailsPageProps {
  data: Record<string, any>;
}

const ActivitiesDetailsPage: NextPage<ActivitiesDetailsPageProps> = ({ data }) => {
  const { t } = useTranslation();

  useLanguageLinks({
    entity: Entities.ACTIVITY,
    id: data?.id,
    route: ROUTES.ACTIVITIES.ROOT,
    api: ApiActivities,
  });

  return (
    <>
      <Head>
        <title>
          {t('activities', 'Деятельность')} | {data.title}
        </title>
        <meta name="description" content={data.shortDescription} />
      </Head>
      <ActivitiesDetail data={data} />
    </>
  );
};

export const getServerSideProps = async ({ locale, params }: any) => {
  const id = slugToId(params.slug);
  const data = await ApiActivities.fetchOneById(id, { embed: 'cover' }).catch((res) => res);

  return {
    notFound: data?.statusCode === 404,
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default ActivitiesDetailsPage;
