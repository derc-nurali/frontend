import { ComponentType } from 'react';
import { Button, Typography } from '@mui/material';
import { useResponsive } from '../../hooks';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '../../constants/routes.constants';
import useStyles from './styles';

interface ErrorPageProps {
  code: string | number;
}

const ERRORS: Record<any, string> = {
  404: 'page-not-found',
  500: 'server-error',
};

export const ErrorPage: ComponentType<ErrorPageProps> = ({ code }) => {
  const { t } = useTranslation();
  const r = useResponsive();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={`/images/errors/error-${code}-lg.png`} width={558} height={202} alt="" />
      <Typography
        variant={r({ xs: 'h4', sm: 'h2' })}
        className={classes.errorText}
        sx={{ mt: r({ xs: 2, sm: 3 }), mb: r({ xs: 4, sm: 6 }) }}
      >
        {t(ERRORS[code])}
      </Typography>
      <Link href={ROUTES.HOME} passHref>
        <Button variant="contained" color="secondary" className={classes.button}>
          {t('return-back', 'Вернуться на главную')}
        </Button>
      </Link>
    </div>
  );
};
