import { ComponentType } from 'react';
import { FilterTabsItemProps } from '../filter-tabs';
import { PostVariants } from './posts-card';
import { Pagination } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { toUrl } from '../../common/utils/format-utils';
import { usePaging } from '../../hooks';
import { Header } from '../header';
import { BaseLayout } from '../layout';
import { Section } from '../section';
import { SubHeader } from '../sub-header';
import { PostsList } from './posts-list';
import { ROUTES } from '../../constants/routes.constants';
import {
  CATEGORY_ARTICLE,
  CATEGORY_JOURNAL,
  CATEGORY_REPORT,
} from '../../constants/posts-categories.constants';

interface PostsProps {
  data: any[];
  total?: number;
  variant?: PostVariants;
}

export const Posts: ComponentType<PostsProps> = ({ data, total, variant = 'news' }) => {
  const { t } = useTranslation();
  const { currentPage, pagesCount, handlePageChange } = usePaging(total);

  const title = variant === 'news' ? t('news', 'Новости') : t('science', 'Наука');

  const labelAll = t('all', 'Все');
  const labelPopular = t('popular', 'Популярные');
  const labelArticles = t('articles', 'Статьи');
  const labelReports = t('reports', 'Доклады');
  const labelJournal = t('journal', 'Журнал');

  const links: Record<typeof variant, FilterTabsItemProps[]> = {
    news: [
      {
        label: labelAll,
        path: ROUTES.NEWS.ROOT,
      },
      {
        label: labelPopular,
        path: ROUTES.NEWS.ROOT + '?orderBy=views',
      },
    ],
    science: [
      {
        label: labelAll,
        path: ROUTES.SCIENCE.ROOT,
      },
      {
        label: labelArticles,
        path: toUrl(ROUTES.SCIENCE.CATEGORY, { title: labelArticles, id: CATEGORY_ARTICLE }),
      },
      {
        label: labelReports,
        path: toUrl(ROUTES.SCIENCE.CATEGORY, { title: labelReports, id: CATEGORY_REPORT }),
      },
      {
        label: labelJournal,
        path: toUrl(ROUTES.SCIENCE.CATEGORY, { title: labelJournal, id: CATEGORY_JOURNAL }),
      },
    ],
  };

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
        <SubHeader title={title} actions={links[variant]} />
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
        <PostsList data={data} variant={variant} />

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
