import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { ErrorPage } from '../src/components/error';
import { LOCALE_RU } from '../src/constants/locales.constants';

export default function ErrorPage404() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('page-not-found', 'Страница не найдена')}</title>
      </Head>
      <ErrorPage code={404} />
    </>
  );
}

export const getStaticProps = async ({ locale = LOCALE_RU }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
