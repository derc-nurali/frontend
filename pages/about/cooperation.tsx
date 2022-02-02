import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import { Cooperation } from '../../src/components/cooperation';
import { ApiPosts } from '../../src/http';
import { ABOUT_PAGES_ID } from '../../src/constants/pages-id.constants';

interface CooperationPageProps {
  data: Record<string, any>;
}

const CooperationPage: NextPage<CooperationPageProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t('about', 'О центре')} | {t('cooperation', 'Сотрудничество')}
        </title>
        <meta name="description" content="cooperation" />
      </Head>
      <Cooperation data={data} />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const aboutPagesId = get(ABOUT_PAGES_ID, [locale], ABOUT_PAGES_ID.ru);
  const data = await ApiPosts.fetchOne(aboutPagesId.cooperation, { embed: 'cover' }).catch(
    (res) => res
  );

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default CooperationPage;
