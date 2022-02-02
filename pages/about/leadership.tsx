import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { StaffLeadership } from '../../src/components/staff';
import { ApiStaff } from '../../src/http';

interface LeadershipPageProps {
  data: Record<string, any>;
}

const LeadershipPage: NextPage<LeadershipPageProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t('about', 'О центре')} | {t('leadership', 'Руководство')}
        </title>
        <meta name="description" content="leadership" />
      </Head>
      <StaffLeadership data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const data = await ApiStaff.fetchAll({
    language: locale,
    department: 'LEADERSHIP',
    embed: 'cover',
    order: '-weight',
  }).catch((res) => res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default LeadershipPage;
