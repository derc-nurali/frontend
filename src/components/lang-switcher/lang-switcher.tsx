import { Button, Menu, MenuItem, SvgIcon } from '@mui/material';
import clsx from 'clsx';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ComponentType, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { LOCALES, LOCALES_MAP } from '../../constants/locales.constants';
import { IconArrowSmall } from '../icons';
import useStyles from './styles';

interface LangSwitcherProps {
  className?: string;
  children?: any;
  variant?: 'default';
}

export const LangSwitcher: ComponentType<LangSwitcherProps> = ({
  className,
  variant = 'default',
}) => {
  const Router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const { locale }: any = useRouter();

  const { languageLinks } = useSelector((state: RootStateOrAny) => state.languageLinks);

  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        className={classes.btn}
        onClick={handleClick}
        title={t('chooseLang', 'Выбор языка')}
        variant="text"
        color="primary"
        endIcon={
          <SvgIcon
            component={IconArrowSmall}
            sx={{
              transform: open ? 'rotate(270deg)' : 'rotate(270deg)',
              fontSize: 24,
            }}
            viewBox="0 0 24 24"
          />
        }
        sx={{
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 1.2,
        }}
      >
        {get(LOCALES_MAP, [locale, 'shortName'], '').toUpperCase()}
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.menu}
        classes={{
          paper: classes.paper,
          list: classes.list,
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {LOCALES.map((lang, idx) => (
          <MenuItem key={idx} className={classes.item}>
            <Link href={get(languageLinks, lang, Router.asPath)} locale={lang}>
              <a className={clsx(classes.link)}>{get(LOCALES_MAP, [lang, 'name'], '')}</a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
