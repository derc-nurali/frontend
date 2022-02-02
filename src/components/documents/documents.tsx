import { useTranslation } from 'next-i18next';
import React, { ComponentType } from 'react';
import { ROUTES } from '../../constants/routes.constants';
import { CrumbProps } from '../breadcrumbs';
import { FilterTabsItemProps } from '../filter-tabs';
import { Header } from '../header';
import { BaseLayout } from '../layout';
import { Section } from '../section';
import { SubHeader } from '../sub-header';
import { DocumentsList } from './documents-list';

interface DocumentsProps {
  data: any[];
  total?: number;
}

export const Documents: ComponentType<DocumentsProps> = ({ data }) => {
  const { t } = useTranslation();

  const title = t('documents', 'Документы');
  const links: FilterTabsItemProps[] = [
    {
      label: t('documents.operating', 'Действующие'),
      path: ROUTES.DOCUMENTS.ROOT,
    },
    {
      label: t('documents.onDevelopment', 'Разрабатываемые'),
      path: ROUTES.DOCUMENTS.ON_DEVELOPMENT,
    },
  ];

  return (
    <BaseLayout>
      <Section
        variant="rounded"
        component="header"
        sx={{
          pt: 0,
          zIndex: 10,
        }}
      >
        <Header />
        <SubHeader title={title} actions={links} />
      </Section>

      <Section
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 30,
          backgroundImage: 'none',
          bgcolor: 'rinatGrey.light',
          zIndex: 9,
        }}
      >
        <DocumentsList data={data} spacing={3.75} itemProps={{ xs: 1, sm: 6, container: true }} />
      </Section>
    </BaseLayout>
  );
};
