export const SITE_PHONE = process.env.NEXT_PUBLIC_SITE_PHONE || '';
export const SITE_EMAIL = process.env.NEXT_PUBLIC_SITE_EMAIL || '';
export const SITE_ADDRESS_1 = process.env.NEXT_PUBLIC_SITE_ADDRESS_1 || '';
export const SITE_ADDRESS_2 = process.env.NEXT_PUBLIC_SITE_ADDRESS_2 || '';
export const SITE_POST_CODE = process.env.NEXT_PUBLIC_SITE_POST_CODE || '';
export const SITE_WORKING_HOURS = process.env.NEXT_PUBLIC_SITE_WORKING_HOURS || '';
export const SITE_MAP_LAT = process.env.NEXT_PUBLIC_SITE_MAP_LAT
  ? parseFloat(process.env.NEXT_PUBLIC_SITE_MAP_LAT)
  : 41.293168;
export const SITE_MAP_LNG = process.env.NEXT_PUBLIC_SITE_MAP_LNG
  ? parseFloat(process.env.NEXT_PUBLIC_SITE_MAP_LNG)
  : 69.299702;

export const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK_URL || '';
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '';
export const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || '';
