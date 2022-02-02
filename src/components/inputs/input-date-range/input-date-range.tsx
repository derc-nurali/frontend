import { LocalizationProvider, StaticDateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateRange } from '@mui/lab/DateRangePicker';
import {
  Box,
  Button,
  InputAdornment,
  InputProps,
  Popover,
  SvgIcon,
  TextField,
} from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { ComponentType, useEffect, useState } from 'react';
import { dateParse } from '../../../common/utils/format-utils';
import { useResponsive } from '../../../hooks';
import { IconArrowSmall } from '../../icons';
import { ru, enUS, uz } from 'date-fns/locale';
import { LOCALE_EN, LOCALE_UZ } from '../../../constants/locales.constants';
import useStyles from './styles';

interface InputDateRangeProps {
  className?: string;
  onChange?: (value: any) => void;
  onClose?: () => void;
  onApply?: () => void;
  onReset?: () => void;
  value: DateRange<Date>;
}

export const InputDateRange: ComponentType<InputDateRangeProps & Omit<InputProps, 'onChange'>> = ({
  className,
  onChange,
  onApply,
  onReset,
  onClose,
  value = [null, null],
}) => {
  const classes = useStyles();
  const r = useResponsive();
  const { t, i18n } = useTranslation();
  const [date, setDate] = useState<DateRange<Date>>(value);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const dateProviderLocale =
    i18n.language === LOCALE_EN ? enUS : i18n.language === LOCALE_UZ ? uz : ru;

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    if (onClose) onClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleDateReset = () => {
    setDate([null, null]);
    if (onReset) onReset();
  };

  const handleDateApply = () => {
    setAnchorEl(null);
    if (onChange) onChange(date);
    if (onApply) onApply();
    handleClose();
  };

  const handleChange = (newDate: DateRange<Date>) => {
    setDate(newDate);
  };

  const formatValue = (date: DateRange<Date>) => {
    const start = date[0] ? dateParse(date[0], 'MMMM yyyyy') : null;
    const end = date[1] ? dateParse(date[1], 'MMMM yyyyy') : null;
    if (!!start && !!end) return `${start} - ${end}`;
    if (!!start) return start;
    return '';
  };

  useEffect(() => {
    const newDate: DateRange<Date> = [null, null];
    if (!!value[0]) newDate[0] = value[0];
    if (!!value[1]) newDate[1] = value[1];
    setDate(newDate);
  }, [value]);

  return (
    <Box className={clsx(className, classes.root)}>
      <TextField
        className={classes.textField}
        placeholder={t('dateRange.placeholder', 'Выберите период')}
        value={formatValue(date)}
        onClick={handleOpen}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <SvgIcon
                component={IconArrowSmall}
                color="primary"
                viewBox="0 0 24 24"
                sx={{
                  display: 'block',
                  color: 'primary.main',
                  transform: 'rotate(-90deg)',
                  fontSize: 24,
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        marginThreshold={r({ xs: 4, sm: 16 })}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{
          paper: classes.paper,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={dateProviderLocale}>
          <StaticDateRangePicker
            className={classes.calendar}
            displayStaticWrapperAs={r({ xs: 'mobile', lg: 'desktop' })}
            showToolbar={false}
            value={date}
            maxDate={new Date()}
            onChange={handleChange}
            renderInput={() => <></>}
          />
        </LocalizationProvider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Button variant="text" sx={{ mr: 'auto' }} onClick={handleDateReset}>
            {t('actions.reset', 'СБРОСИТЬ')}
          </Button>
          <Button onClick={handleDateApply}>{t('actions.aply', 'ПРИМЕНИТЬ')}</Button>
        </Box>
      </Popover>
    </Box>
  );
};
