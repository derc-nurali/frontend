import { ElementType } from 'react';

export interface MenuItemsInterface {
  label: string;
  labelKey: string;
  path: string;
  icon?: ElementType;
  child?: MenuItemsInterface[];
}
