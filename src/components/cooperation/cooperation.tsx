import { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { BaseLayout } from '../layout/base-layout';
import { Section } from '../section';
import { Header } from '../header';
import { SubHeader } from '../sub-header';
import { CooperationBlock } from './cooperation-block';

interface CooperationProps {
  data: Record<string, any>;
}

export const Cooperation: ComponentType<CooperationProps> = ({ data }) => {
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
        <SubHeader title={t('cooperation', 'Сотрудничество')} />
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
        <CooperationBlock data={data} />
      </Section>
    </BaseLayout>
  );
};
