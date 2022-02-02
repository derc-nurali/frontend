import React, { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { BaseLayout } from '../layout';
import { Header } from '../header';
import { SubHeader } from '../sub-header';
import { Section } from '../section';
import { DataGrid } from '../data-grid';
import { SubdivisionsCard } from './subdivisions-card';

interface SubdivisionsProps {
  data: any[];
  total?: number;
}

export const Subdivisions: ComponentType<SubdivisionsProps> = ({ data }) => {
  const { t } = useTranslation();

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
        <SubHeader title={t('subdivisions', 'Подразделения')} />
      </Section>
      <Section
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 22.5,
          backgroundImage: 'none',
          bgcolor: 'rinatGrey.light',
          zIndex: 9,
        }}
      >
        <DataGrid
          data={data}
          spacing={3.75}
          itemProps={{ xs: 12 }}
          renderItem={(item) => <SubdivisionsCard data={item} />}
        />
      </Section>
    </BaseLayout>
  );
};
