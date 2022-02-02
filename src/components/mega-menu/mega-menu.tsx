import { ClickAwayListener } from '@mui/material';
import { map } from 'lodash';
import React, { ComponentType, useState } from 'react';
import { useThemeChange } from '../../common/theme/useThemeChange';
import { MEGA_MENU } from '../../constants/menu/mega-menu.constants';
import { MenuItemsInterface } from '../../constants/menu/menu-items-interface.constants';
import { MegaMenuItem } from './mega-menu-item';
import useStyles from './styles';

interface MegaMenuProps {
  className?: string;
}

export const MegaMenu: ComponentType<MegaMenuProps> = () => {
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';
  const classes = useStyles({ a11yMode });
  const [open, setOpen] = useState<null | number>(null);

  const opened = (idx: number) => {
    if (open === idx) {
      setOpen(null);
    } else {
      setOpen(idx);
    }
  };

  const handleClickAway = () => setOpen(null);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <nav className={classes.root}>
        {map(MEGA_MENU, (item: MenuItemsInterface, idx: number) => {
          return (
            <MegaMenuItem data={item} open={open === idx} opened={() => opened(idx)} key={idx} />
          );
        })}
      </nav>
    </ClickAwayListener>
  );
};
