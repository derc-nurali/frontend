export const LOCALE_UZ = 'uz';
export const LOCALE_RU = 'ru';
export const LOCALE_EN = 'en';

export const LOCALES_MAP = {
  [LOCALE_UZ]: { shortName: 'O‘z', name: 'O‘zbekcha' },
  [LOCALE_RU]: { shortName: 'Ру', name: 'Русский' },
  [LOCALE_EN]: { shortName: 'En', name: 'English' },
};

export const LOCALES = Object.keys(LOCALES_MAP) as Locale[];

export type Locale = keyof typeof LOCALES_MAP;
