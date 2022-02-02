import { Box, BoxProps, IconButton, Stack, SvgIcon } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { ComponentType } from 'react';
import { useThemeChange } from '../../common/theme/useThemeChange';
import { APP_DEFAULT_THEME } from '../../constants/base.constants';
import { ROUTES } from '../../constants/routes.constants';
import { useResponsive } from '../../hooks';
import { IconGlasses, IconGlassesOf, IconMenu, IconSearch } from '../icons';
import { LangSwitcher } from '../lang-switcher';
import { useLayout } from '../layout';
import { Logo } from '../logo';
import { MegaMenu } from '../mega-menu';
import { SearchForm } from '../search';
import useStyles from './styles';

interface HeaderProps {
  className?: string;
}

export const Header: ComponentType<HeaderProps & BoxProps> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const r = useResponsive();
  const { handleTheme, theme } = useThemeChange();
  const { toggleLayoutDrawer } = useLayout();
  const rowSpacing = r({ xs: 1.75, md: 6.25 });

  return (
    <Box
      className={clsx(classes.root, className)}
      component={Stack}
      direction="row"
      alignItems="center"
    >
      <Logo className={classes.logo} />

      {/* START nav */}
      {r({
        lg: (
          <Stack
            pl={rowSpacing}
            spacing={rowSpacing}
            direction="row"
            alignItems="center"
            component="nav"
            className={classes.nav}
          >
            <Link href={ROUTES.ABOUT.ROOT}>
              <a className={classes.link}>{t('about', 'О центре')}</a>
            </Link>
            <Link href={ROUTES.SERVICES.ROOT}>
              <a className={classes.link}>{t('services', 'Услуги')}</a>
            </Link>
          </Stack>
        ),
      })}
      {/* END nav */}

      {/* START toolbar */}
      <Stack
        pl={rowSpacing}
        ml={'auto'}
        spacing={r({ xs: 1.75, md: 4.25 })}
        direction="row"
        alignItems="center"
        className={classes.toolbar}
      >
        <IconButton
          color="primary"
          className={classes.btn}
          onClick={() => handleTheme(theme === 'a11y' ? APP_DEFAULT_THEME : 'a11y')}
        >
          {theme === 'a11y' ? (
            <SvgIcon component={IconGlassesOf} />
          ) : (
            <SvgIcon component={IconGlasses} />
          )}
        </IconButton>
        <IconButton
          color="primary"
          className={classes.btn}
          onClick={() => toggleLayoutDrawer(() => <SearchForm className={classes.search} />)}
        >
          <SvgIcon color="primary" component={IconSearch} />
        </IconButton>

        {r({
          sm: <LangSwitcher className={classes.lang} />,
        })}

        <IconButton
          color="primary"
          className={classes.btn}
          onClick={() => toggleLayoutDrawer(() => <MegaMenu className={classes.megaMenu} />)}
        >
          <SvgIcon color="primary" component={IconMenu} />
        </IconButton>
      </Stack>
      {/* END toolbar */}
    </Box>
  );
};
