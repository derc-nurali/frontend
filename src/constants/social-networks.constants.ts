export const SN_FACEBOOK = 'FACEBOOK';
export const SN_TELEGRAM = 'TELEGRAM';

export const SN_SHARE_URLS = {
  [SN_FACEBOOK]: (url: string) => `https://www.facebook.com/sharer.php?u=${url}`,
  [SN_TELEGRAM]: (url: string) => `https://telegram.me/share/url?url=${url}`,
};
