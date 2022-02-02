import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Services } from '../../src/components/services';
import Head from 'next/head';
import { get } from 'lodash';
import { DEFAULT_PAGE, DEFAULT_PAGE_ITEMS } from '../../src/constants/base.constants';
import { ApiServices } from '../../src/http';

interface ServicesPageProps {
  data: Record<string, any>;
}

const ServicesPage: NextPage<ServicesPageProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('services', 'Услуги')}</title>
        <meta name="description" content="services" />
      </Head>
      <Services data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale, query = {} }: any) => {
  const page = get(query, ['page'], DEFAULT_PAGE);
  const take = get(query, ['take'], DEFAULT_PAGE_ITEMS);

  const data = await ApiServices.fetchAll({
    language: locale,
    embed: 'cover',
    exclude: 'description',
    skip: parseInt(take) * (page - 1),
    take,
    ...query,
  }).catch((res) => res);

  return {
    notFound: data?.statusCode === 404,
    props: {
      data,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default ServicesPage;
