import { ComponentType } from 'react';
import { Pagination } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { usePaging } from '../../hooks';
import { Header } from '../header';
import { BaseLayout } from '../layout';
import { Section } from '../section';
import { SubHeader } from '../sub-header';
import { ActivitiesList } from './activities-list';

interface ActivitiesProps {
  data: any[];
  total?: number;
}

export const Activities: ComponentType<ActivitiesProps> = ({ data, total }) => {
  const { t } = useTranslation();
  const { currentPage, pagesCount, handlePageChange } = usePaging(total);

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
        <SubHeader title={t('activities', 'Деятельность')} />
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
        <ActivitiesList data={data} spacing={10} itemProps={{ xs: 1, sm: 2, lg: 4 }} />

        {pagesCount > 1 && (
          <Pagination
            size="large"
            color="primary"
            page={currentPage}
            count={pagesCount}
            onChange={handlePageChange}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 5.75,
            }}
          />
        )}
      </Section>
    </BaseLayout>
  );
};
