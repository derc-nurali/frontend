import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ROUTES } from '../../src/constants/routes.constants';
import { ApiPosts } from '../../src/http';
import Head from 'next/head';
import { PostsDetail } from '../../src/components/posts';
import { useTranslation } from 'next-i18next';
import { useLanguageLinks } from '../../src/hooks';
import { slugToId } from '../../src/common/utils/format-utils';
import { Entities } from '../../src/enums/entities.enum';

interface NewsDetailPageProps {
  data: Record<string, any>;
}

const ScienceDetailPage: NextPage<NewsDetailPageProps> = ({ data }) => {
  const { t } = useTranslation();

  useLanguageLinks({
    entity: Entities.POST,
    id: data.id,
    route: ROUTES.SCIENCE.ROOT,
    api: ApiPosts,
  });

  return (
    <>
      <Head>
        <title>
          {t('science', 'Наука')} | {data.title}
        </title>
        <meta name="description" content={data.shortDescription} />
      </Head>
      <PostsDetail data={data} variant="science" />
    </>
  );
};

export const getServerSideProps = async ({ locale, params }: any) => {
  const id = slugToId(params.slug);
  const data = await ApiPosts.fetchOne(id, {
    embed: 'categories,cover',
  }).catch((res) => res);

  return {
    notFound: data?.statusCode === 404,
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default ScienceDetailPage;
