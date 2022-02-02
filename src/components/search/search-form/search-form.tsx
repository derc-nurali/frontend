import {
  Box,
  BoxProps,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  SvgIcon,
  TextField,
} from '@mui/material';
import clsx from 'clsx';
import { get, map } from 'lodash';
import { useTranslation } from 'next-i18next';
import { NextRouter } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';
import React, { ComponentType } from 'react';
import { Locale, LOCALES, LOCALES_MAP } from '../../../constants/locales.constants';
import {
  CATEGORY_ARTICLE,
  CATEGORY_JOURNAL,
  CATEGORY_NEWS,
  CATEGORY_PUBLICATION,
  CATEGORY_REPORT,
} from '../../../constants/posts-categories.constants';
import { useResponsive } from '../../../hooks';
import { IconArrowSmall, IconSearch, IconSearchLarge } from '../../icons';
import { InputDateRange } from '../../inputs/input-date-range';
import { FIELD_CATEGORY, FIELD_LANG, FIELD_SEARCH } from './search-form-schema';
import useStyles from './styles';
import { useSearchForm } from './useSearchForm';

interface SearchFormProps {
  className?: string;
}

interface Category {
  label: string;
  labelKey: string;
  value: string | number;
}

const categories: Category[] = [
  {
    label: 'Все',
    labelKey: 'all',
    value: '""',
  },
  {
    label: 'Новости',
    labelKey: 'news',
    value: CATEGORY_NEWS,
  },
  {
    label: 'Публикации',
    labelKey: 'publications',
    value: CATEGORY_PUBLICATION,
  },
  {
    label: 'Статьи',
    labelKey: 'articles',
    value: CATEGORY_ARTICLE,
  },
  {
    label: 'Доклады',
    labelKey: 'reports',
    value: CATEGORY_REPORT,
  },
  {
    label: 'Журнал',
    labelKey: 'journal',
    value: CATEGORY_JOURNAL,
  },
];

export const SearchForm: ComponentType<SearchFormProps & BoxProps> = ({ className }) => {
  const classes = useStyles();
  const router: NextRouter = useRouter();
  const r = useResponsive();
  const { t } = useTranslation();

  const { params, handleFieldChange, handleDateRangeChange, handleSubmit } = useSearchForm();

  const languageValue = get(params, FIELD_LANG, router.locale);
  const categoryValue = get(params, FIELD_CATEGORY, '""');

  const searchValue = get(params, FIELD_SEARCH, '');

  return (
    <Box className={clsx(classes.root, className)} component="form" onSubmit={handleSubmit}>
      <Grid container columnSpacing={r({ xs: 3, lg: 10 })}>
        <Grid item xs={12} md={4}>
          <TextField
            select
            value={languageValue}
            onChange={handleFieldChange(FIELD_LANG)}
            inputProps={{
              IconComponent: (props: any) => (
                <SvgIcon
                  className={clsx(classes.icon, props.className)}
                  component={IconArrowSmall}
                />
              ),
            }}
          >
            {map(LOCALES, (lang: Locale, idx: number) => {
              return (
                <MenuItem key={`${idx}_${lang}`} value={lang}>
                  {get(LOCALES_MAP, [lang, 'name'], '')}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            select
            value={categoryValue}
            onChange={handleFieldChange(FIELD_CATEGORY)}
            inputProps={{
              IconComponent: (props: any) => (
                <SvgIcon
                  className={clsx(classes.icon, props.className)}
                  component={IconArrowSmall}
                />
              ),
            }}
          >
            {map(categories, (category: Category, idx: number) => {
              return (
                <MenuItem key={`${idx}_${category.labelKey}`} value={category.value}>
                  {t(category.labelKey, category.label)}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputDateRange
            value={[params?.createdAtFrom, params?.createdAtTo]}
            onChange={handleDateRangeChange}
          />
        </Grid>
      </Grid>
      <TextField
        className={classes.search}
        value={searchValue}
        onChange={handleFieldChange(FIELD_SEARCH)}
        placeholder={t('search.form.search', 'Поиск по сайту')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                className={classes.btn}
                aria-label={t('search.form.search', 'Поиск по сайту')}
                edge="end"
                type="submit"
              >
                <SvgIcon
                  className={classes.icon}
                  component={r({ xs: IconSearch, lg: IconSearchLarge })}
                  sx={{
                    transform: 'rotate(0)',
                    fontSize: { lg: 28, xs: 24 },
                  }}
                  viewBox={r({ xs: '0 0 24 24', lg: '0 0 28 28' })}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
