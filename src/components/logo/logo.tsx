import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/link';
import React, { ComponentType } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../constants/routes.constants';
import { LogoDERC } from '../icons';
import useStyles from './styles';

interface LogoProps {
  className?: string;
  href?: string;
  variant?: 'default' | 'inherit';
}

export const Logo: ComponentType<LogoProps & BoxProps> = ({
  variant = 'default',
  href = ROUTES.HOME,
  className,
  ...props
}) => {
  const classes = useStyles();
  const { i18n } = useTranslation();

  return (
    <>
      {Boolean(href) ? (
        <Link {...props} href={href}>
          <a className={clsx(className, `logo logo--${i18n.language} logo--${variant}`)}>
            <LogoDERC className={classes.img} viewBox="0 0 165 34" />
          </a>
        </Link>
      ) : (
        <Box
          component="div"
          className={clsx(className, `logo logo--${i18n.language} logo--${variant}`)}
          {...props}
        >
          <LogoDERC className={classes.img} viewBox="0 0 165 34" />
        </Box>
      )}
    </>
  );
};
// logo-en logo-ru logo-uz
//
