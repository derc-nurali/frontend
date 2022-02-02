import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ApiDocuments } from '../../src/http';
import { get } from 'lodash';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { Documents } from '../../src/components/documents';
import { DOCUMENTS_TAGS } from '../../src/constants/documents-tags.constants';
import { DEFAULT_PAGE } from '../../src/constants/base.constants';

const DocumentsPage: NextPage<{ data: Record<string, any> }> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('documents', 'Документы')}</title>
        <meta name="description" content="documents" />
      </Head>
      <Documents data={data.hits} total={data.total} />
    </>
  );
};

export const getServerSideProps = async ({ locale, query = {} }: any) => {
  const tags = get(DOCUMENTS_TAGS, [locale, 'development'], DOCUMENTS_TAGS.ru.operating);
  const page = get(query, ['page'], DEFAULT_PAGE);
  const take = get(query, ['take'], 999);

  const data = await ApiDocuments.fetchAll({
    language: locale,
    skip: parseInt(take) * (page - 1),
    take,
    tags,
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

export default DocumentsPage;
