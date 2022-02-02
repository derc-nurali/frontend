import { SvgIcon, Typography } from '@mui/material';
import clsx from 'clsx';
import { get, isEmpty, map } from 'lodash';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ComponentType } from 'react';
import { useThemeChange } from '../../common/theme/useThemeChange';
import { MenuItemsInterface } from '../../constants/menu/menu-items-interface.constants';
import { IconArrowLarge } from '../icons';
import { useLayout } from '../layout';
import useStyles from './styles';

type ItemProps = { [key: string]: string };
interface MegaMenuItemProperty {
  data: MenuItemsInterface;
  open: boolean;
  opened: () => void;
}

export const MegaMenuItem: ComponentType<MegaMenuItemProperty> = ({
  data,
  opened,
  open = false,
}) => {
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';
  const classes = useStyles({ a11yMode });
  const { t } = useTranslation();
  const { label, labelKey, path, child } = data;

  const { toggleLayoutDrawer } = useLayout();
  const router = useRouter();
  const asPath = get(router, ['asPath'], '/');
  const active = path === asPath;

  const handleLinkClick = () => {
    opened();
    toggleLayoutDrawer();
  };

  const renderItem = ({ labelKey, label, path }: ItemProps) => {
    const active = path === asPath;
    return (
      <Link href={path || '/'} passHref>
        <Typography
          color={active ? 'gradient' : 'inherit'}
          component="a"
          variant="h4"
          onClick={handleLinkClick}
          className={clsx(classes.link, { [classes.active]: active })}
        >
          <div>{t(labelKey, label) || label} </div>
        </Typography>
      </Link>
    );
  };

  const submenu = () => {
    if (isEmpty(child)) return null;
    const subitems = map(child, (subitem: ItemProps, idx: number) => (
      <li className={classes.subitem} key={idx}>
        {renderItem(subitem)}
      </li>
    ));
    return <ul className={clsx(classes.submenu)}>{subitems}</ul>;
  };

  return (
    <div className={clsx(classes.item, { [classes.open]: open })}>
      {child ? (
        <Typography
          component="a"
          variant="h3"
          color={open || active ? 'gradient' : 'inherit'}
          onClick={opened}
          className={clsx(classes.button, { [classes.active]: open || active })}
          role="button"
        >
          <div>{t(labelKey, label)}</div>
          <SvgIcon
            component={IconArrowLarge}
            viewBox="0 0 32 32"
            className={clsx(classes.icon, classes.__right)}
          />
        </Typography>
      ) : (
        <Link href={path} passHref>
          <Typography
            component="a"
            variant="h3"
            color={active ? 'gradient' : 'inherit'}
            className={clsx(classes.button, { [classes.active]: open || active })}
            onClick={toggleLayoutDrawer}
          >
            <span>{t(labelKey, label)}</span>
          </Typography>
        </Link>
      )}

      {submenu()}
    </div>
  );
};
