import { DateRange } from '@mui/lab/DateRangePicker';
import { isEmpty } from 'lodash';
import { useTranslation } from 'next-i18next';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dateParse, toUrlWithSearchParams } from '../../../common/utils/format-utils';
import { useLayout } from '../../layout';
import { Locale } from '../../../constants/locales.constants';
import { ROUTES } from '../../../constants/routes.constants';

interface SearchParams {
  language?: Locale;
  categories?: any;
  createdAtTo?: any;
  createdAtFrom?: any;
  search?: string;
}

export const useSearchForm = () => {
  const router: NextRouter = useRouter();
  const { i18n } = useTranslation();
  const { closeLayoutDrawer } = useLayout();

  const [params, setParams] = useState<SearchParams>({
    language: i18n.language as Locale,
    categories: '',
    createdAtTo: null,
    createdAtFrom: null,
    search: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(toUrlWithSearchParams(ROUTES.SEARCH.ROOT, params)).catch(() => {});
    closeLayoutDrawer();
  };

  const handleFieldChange = (field: string) => (e: any) => {
    setParams((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleDateRangeChange = (date: DateRange<Date>) => {
    setParams((prev) => {
      const p = { ...prev };
      if (date[0]) p.createdAtFrom = dateParse(date[0], 'yyyy-MM-dd');
      if (date[1]) p.createdAtTo = dateParse(date[1], 'yyyy-MM-dd');
      return p;
    });
  };

  useEffect(() => {
    if (!isEmpty(router.query) && router.pathname === ROUTES.SEARCH.ROOT) {
      setParams(router.query);
    }
  }, [router.query, router.pathname]);

  return {
    params,
    handleSubmit,
    handleFieldChange,
    handleDateRangeChange,
  };
};
