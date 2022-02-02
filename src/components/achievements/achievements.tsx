import { ComponentType } from 'react';
import { Container } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { BaseLayout } from '../layout/base-layout';
import { PageTitle } from '../page-title';
import { AchievementsList } from './achievements-list';
import { Breadcrumbs, CrumbProps } from '../breadcrumbs';

interface AchievementsProps {
  data: any[];
  total?: number;
}

export const Achievements: ComponentType<AchievementsProps> = ({ data }) => {
  const { t } = useTranslation();

  const title = t('achievements', 'Достижения');
  const crumbs: CrumbProps[] = [
    {
      label: title,
    },
  ];

  return (
    <BaseLayout>
      <Container>
        <Breadcrumbs crumbs={crumbs} />
        <PageTitle title={title} />
        <AchievementsList data={data} spacing={4} itemProps={{ xs: 1, sm: 2, lg: 3 }} />
      </Container>
    </BaseLayout>
  );
};
