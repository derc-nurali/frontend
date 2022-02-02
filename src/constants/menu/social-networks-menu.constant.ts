import { MenuItemsInterface } from './menu-items-interface.constants';
import { IconFacebook, IconInstagram, IconTelegram } from '../../components/icons';
import { FACEBOOK_URL, INSTAGRAM_URL, TELEGRAM_URL } from '../contacts.constants';

export const SocialNetworksMenu: MenuItemsInterface[] = [
  {
    label: 'Facebook',
    labelKey: 'facebook',
    path: FACEBOOK_URL,
    icon: IconFacebook,
  },
  {
    label: 'Instagram',
    labelKey: 'instagram',
    path: INSTAGRAM_URL,
    icon: IconInstagram,
  },
  {
    label: 'Telegram',
    labelKey: 'telegram',
    path: TELEGRAM_URL,
    icon: IconTelegram,
  },
];
