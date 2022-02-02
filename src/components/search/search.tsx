import { Pagination } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { ComponentType } from 'react';
import { usePaging } from '../../hooks';
import { DataGrid } from '../data-grid';
import { Header } from '../header';
import { BaseLayout } from '../layout';
import { Section } from '../section';
import { SubHeader } from '../sub-header';
import { SearchCard } from './search-card';

interface SearchProps {
  data: any[];
  total?: number;
}

export const Search: ComponentType<SearchProps> = ({ data, total }) => {
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
        <SubHeader title={t('search', 'Поиск')} />
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
          spacing={3}
          renderItem={(item) => <SearchCard item={item} />}
        />

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
