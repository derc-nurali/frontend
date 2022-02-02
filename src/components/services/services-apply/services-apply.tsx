import { ComponentType } from 'react';
import { Container } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { BaseLayout } from '../../layout';
import { PageTitle } from '../../page-title';
import { Breadcrumbs, CrumbProps } from '../../breadcrumbs';
import { ROUTES } from '../../../constants/routes.constants';

export const ServicesApply: ComponentType = () => {
  const { t } = useTranslation();

  const title = t('apply', 'Подать заявку');
  const crumbs: CrumbProps[] = [
    {
      path: ROUTES.SERVICES.ROOT,
      label: t('services', 'Услуги'),
    },
    {
      label: title,
    },
  ];

  return (
    <BaseLayout>
      <Container>
        <Breadcrumbs crumbs={crumbs} />
        <PageTitle title={title} />
      </Container>
    </BaseLayout>
  );
};
