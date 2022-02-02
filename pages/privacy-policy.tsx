import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { get } from 'lodash';
import { PrivacyPolicy } from '../src/components/privacy-policy';
import { ApiPosts } from '../src/http';
import { PRIVACY_POLICY_ID } from '../src/constants/pages-id.constants';

interface PrivacyPolicyPageProps {
  data: Record<string, any>;
}

const PrivacyPolicyPage: NextPage<PrivacyPolicyPageProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('privacy.policy', 'Пполитика конфиденциальности')}</title>
        <meta name="description" content="privacy.policy" />
      </Head>
      <PrivacyPolicy data={data} />
    </>
  );
};

export const getServerSideProps = async ({ locale }: any) => {
  const privacyPoliceId = get(PRIVACY_POLICY_ID, [locale], PRIVACY_POLICY_ID.ru);
  const data = await ApiPosts.fetchOne(privacyPoliceId).catch((res) => res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default PrivacyPolicyPage;
