import { MenuItemsInterface } from './menu-items-interface.constants';
import { ROUTES } from '../routes.constants';

export const ServicesMenu: MenuItemsInterface[] = [
  {
    label: 'Подать заявку',
    labelKey: 'apply',
    path: ROUTES.SERVICES.APPLY,
  },
];
