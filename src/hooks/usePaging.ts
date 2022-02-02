import { ChangeEvent } from 'react';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { DEFAULT_PAGE, DEFAULT_PAGE_ITEMS } from '../constants/base.constants';

export const usePaging = (total: number = 0, perPage: number = DEFAULT_PAGE_ITEMS) => {
  const router = useRouter();

  const currentPage = Number(get(router, ['query', 'page'], DEFAULT_PAGE));
  const takeCount = get(router, ['query', 'take'], perPage);
  const pagesCount = Math.ceil((total || 0) / Number(takeCount));

  const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
    const pathname = get(router, ['pathname'], '/');
    const query: Record<string, any> = get(router, ['query'], {});
    query.page = page;
    router.push({ pathname, query }).catch(() => {});
  };

  return { currentPage, pagesCount, handlePageChange };
};
