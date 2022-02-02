import { useTranslation } from 'next-i18next';
import { ComponentType } from 'react';
import { StructureSchema } from '.';
import { Header } from '../header';
import { BaseLayout } from '../layout/base-layout';
import { Section } from '../section';
import { SubHeader } from '../sub-header';

export const Structure: ComponentType = () => {
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
        <SubHeader title={t('structure', 'Структура')} />
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
        <StructureSchema />
      </Section>
    </BaseLayout>
  );
};
