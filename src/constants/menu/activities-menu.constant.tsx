import { MenuItemsInterface } from './menu-items-interface.constants';
import { ROUTES } from '../routes.constants';

export const ActivitiesMenu: MenuItemsInterface[] = [
  {
    label: 'Руководство',
    labelKey: 'leadership',
    path: ROUTES.ABOUT.LEADERSHIP,
  },
  {
    label: 'Структура',
    labelKey: 'structure',
    path: ROUTES.ABOUT.STRUCTURE,
  },
  {
    label: 'Подразделения',
    labelKey: 'subdivisions',
    path: ROUTES.ABOUT.SUBDIVISIONS,
  },
  {
    label: 'Вакансии',
    labelKey: 'vacancies',
    path: ROUTES.ABOUT.VACANCIES,
  },
  {
    label: 'Сотрудничество',
    labelKey: 'cooperation',
    path: ROUTES.ABOUT.COOPERATION,
  },
];
