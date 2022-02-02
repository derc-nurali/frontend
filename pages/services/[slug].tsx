import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ROUTES } from '../../src/constants/routes.constants';
import { ApiServices } from '../../src/http';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useLanguageLinks } from '../../src/hooks';
import { ServicesDetail } from '../../src/components/services';
import { slugToId } from '../../src/common/utils/format-utils';
import { Entities } from '../../src/enums/entities.enum';

interface NewsDetailPageProps {
  data: Record<string, any>;
}

const NewsDetailPage: NextPage<NewsDetailPageProps> = ({ data }) => {
  const { t } = useTranslation();

  useLanguageLinks({
    entity: Entities.SERVICE,
    id: data.id,
    route: ROUTES.SERVICES.ROOT,
    api: ApiServices,
  });

  return (
    <>
      <Head>
        <title>
          {t('services', 'Услуги')} | {data.title}
        </title>
        <meta name="description" content={data.shortDescription} />
      </Head>
      <ServicesDetail data={data} />
    </>
  );
};

export const getServerSideProps = async ({ locale, params }: any) => {
  const id = slugToId(params.slug);
  const data = await ApiServices.fetchOne(id, {
    embed: 'cover',
  }).catch((res) => res);

  return {
    notFound: data?.statusCode === 404,
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default NewsDetailPage;
