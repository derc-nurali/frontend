import { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { BaseLayout } from '../layout/base-layout';
import { Section } from '../section';
import { Header } from '../header';
import { SubHeader } from '../sub-header';
import { DataGrid } from '../data-grid';
import { VacanciesCard } from './vacancies-card';

interface VacanciesProps {
  data: any[];
  total?: number;
}

export const Vacancies: ComponentType<VacanciesProps> = ({ data }) => {
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
        <SubHeader title={t('vacancies', 'Вакансии')} />
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
          flexDirection="column"
          spacing={3.75}
          renderItem={(item) => <VacanciesCard item={item} />}
        />
      </Section>
    </BaseLayout>
  );
};
