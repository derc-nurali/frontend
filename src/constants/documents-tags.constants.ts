import { Locale, LOCALE_EN, LOCALE_RU, LOCALE_UZ } from './locales.constants';

interface TagProps {
  operating: string;
  development: string;
}

export const DOCUMENTS_TAGS: Record<Locale, TagProps> = {
  [LOCALE_RU]: {
    operating: process.env.NEXT_PUBLIC_DOC_TAG_OPERATING_RU || 'Действующие',
    development: process.env.NEXT_PUBLIC_DOC_TAG_ON_DEVELOPMENT_RU || 'Разрабатываемые',
  },
  [LOCALE_EN]: {
    operating: process.env.NEXT_PUBLIC_DOC_TAG_OPERATING_EN || 'Operating',
    development: process.env.NEXT_PUBLIC_DOC_TAG_ON_DEVELOPMENT_EN || 'On development',
  },
  [LOCALE_UZ]: {
    operating: process.env.NEXT_PUBLIC_DOC_TAG_OPERATING_UZ || 'Ishlayotgan',
    development: process.env.NEXT_PUBLIC_DOC_TAG_ON_DEVELOPMENT_UZ || 'Yaratilmoqda',
  },
};
