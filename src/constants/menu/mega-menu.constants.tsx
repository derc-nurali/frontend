import { ROUTES } from '../routes.constants';
import { MenuItemsInterface } from './menu-items-interface.constants';

export const MEGA_MENU: MenuItemsInterface[] = [
  {
    label: 'О центре',
    labelKey: 'about',
    path: ROUTES.ABOUT.ROOT,
    child: [
      {
        label: 'О центре',
        labelKey: 'about',
        path: ROUTES.ABOUT.ROOT,
      },
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
        label: 'Деятельность',
        labelKey: 'activities',
        path: ROUTES.ABOUT.ACTIVITIES,
      },
      {
        label: 'Сотрудничество',
        labelKey: 'cooperation',
        path: ROUTES.ABOUT.COOPERATION,
      },
      {
        label: 'Сотрудничество',
        labelKey: 'vacancies',
        path: ROUTES.ABOUT.VACANCIES,
      },
      {
        label: 'Связаться с нами',
        labelKey: 'contacts.us',
        path: ROUTES.ABOUT.CONTACTS,
      },
    ],
  },
  {
    label: 'Наука',
    labelKey: 'science',
    path: ROUTES.SCIENCE.ROOT,
  },
  {
    label: 'Документы',
    labelKey: 'documents',
    path: ROUTES.DOCUMENTS.ROOT,
  },
  {
    label: 'Услуги',
    labelKey: 'services',
    path: ROUTES.SERVICES.ROOT,
  },
  {
    label: 'Новости',
    labelKey: 'news',
    path: ROUTES.NEWS.ROOT,
  },
  {
    label: 'Открытые данные',
    labelKey: 'openData',
    path: ROUTES.OPEN_DATA.ROOT,
  },
];
