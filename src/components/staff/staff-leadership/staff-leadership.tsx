import React, { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { BaseLayout } from '../../layout';
import { Section } from '../../section';
import { Header } from '../../header';
import { SubHeader } from '../../sub-header';
import { StaffLeaderCard } from '../index';
import { DataGrid } from '../../data-grid';

interface StaffLeadershipProps {
  data: any[];
  total?: string;
}

export const StaffLeadership: ComponentType<StaffLeadershipProps> = ({ data }) => {
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
        <SubHeader title={t('leadership', 'Руководство')} />
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
        <DataGrid
          data={data}
          flexDirection="column"
          columnSpacing={2}
          renderItem={(item) => <StaffLeaderCard item={item} />}
        />
      </Section>
    </BaseLayout>
  );
};
