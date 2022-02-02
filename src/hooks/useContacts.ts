import { useTranslation } from 'next-i18next';
import {
  SITE_ADDRESS_1,
  SITE_ADDRESS_2,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_POST_CODE,
  SITE_WORKING_HOURS,
} from '../constants/contacts.constants';

export type ContactsType = 'address' | 'phone' | 'email' | 'postCode' | 'workingHours';

export interface ContactItemProps {
  label: string;
  labelKey: string;
  value: string;
}

export const useContacts = () => {
  const { t } = useTranslation();

  const contacts: Record<ContactsType, ContactItemProps> = {
    address: {
      label: 'Адрес',
      labelKey: 'contacts.address.label',
      value: t('contacts.address.value', `${SITE_ADDRESS_1}, ${SITE_ADDRESS_2}`),
    },
    phone: {
      label: 'Телефон',
      labelKey: 'contacts.phone.label',
      value: SITE_PHONE,
    },
    email: {
      label: 'Эл. почта',
      labelKey: 'contacts.phone.label',
      value: SITE_EMAIL,
    },
    postCode: {
      label: 'Почтовый индекс',
      labelKey: 'contacts.postCode.label',
      value: SITE_POST_CODE,
    },
    workingHours: {
      label: 'Режим работы',
      labelKey: 'contacts.workingHours.label',
      value: t('contacts.workingHours.value', SITE_WORKING_HOURS),
    },
  };

  const contactsItems: ContactItemProps[] = [
    contacts.address,
    contacts.phone,
    contacts.email,
    contacts.postCode,
    contacts.workingHours,
  ];

  return { contacts, contactsItems };
};
