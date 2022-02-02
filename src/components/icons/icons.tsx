import { ReactComponent as IconArrowLarge } from './svg/arrow-large.svg';
import { ReactComponent as IconArrowSmall } from './svg/arrow-small.svg';
import { ReactComponent as IconClose } from './svg/close.svg';
import { ReactComponent as LogoDERC } from './svg/derc.svg';
import { ReactComponent as LogoEgov } from './svg/egov.svg';
import { ReactComponent as IconEmail } from './svg/email.svg';
import { ReactComponent as LogoEmblemUzbekistan } from './svg/emblem-of-uzbekistan.svg';
import { ReactComponent as IconFacebook } from './svg/facebook.svg';
import { ReactComponent as IconFile } from './svg/file.svg';
import { ReactComponent as IconGlassesOf } from './svg/glasses-of.svg';
import { ReactComponent as IconGlasses } from './svg/glasses.svg';
import { ReactComponent as IconInstagram } from './svg/instagram.svg';
import { ReactComponent as LogoLexUz } from './svg/lex-uz.svg';
import { ReactComponent as IconMenu } from './svg/menu.svg';
import { ReactComponent as LogoMITC } from './svg/mitc.svg';
import { ReactComponent as LogoMyGov } from './svg/my-gov.svg';
import { ReactComponent as LogoOpenData } from './svg/open-data.svg';
import { ReactComponent as IconPhone } from './svg/phone.svg';
import { ReactComponent as IconRedirect } from './svg/redirect.svg';
import { ReactComponent as IconSearchLarge } from './svg/search-large.svg';
import { ReactComponent as IconSearch } from './svg/search.svg';
import { ReactComponent as IconTelegram } from './svg/telegram.svg';
import { ReactComponent as IconTime } from './svg/time.svg';

export {
  IconArrowSmall,
  IconArrowLarge,
  IconFacebook,
  IconGlasses,
  IconGlassesOf,
  IconInstagram,
  IconMenu,
  IconSearch,
  IconSearchLarge,
  IconTelegram,
  IconRedirect,
  LogoEgov,
  LogoEmblemUzbekistan,
  LogoLexUz,
  LogoMITC,
  LogoMyGov,
  LogoOpenData,
  LogoDERC,
  IconFile,
  IconClose,
  IconEmail,
  IconPhone,
  IconTime,
};

export const Icons = () => ({
  ArrowSmall: IconArrowSmall,
  ArrowLarge: IconArrowLarge,
  Facebook: IconFacebook,
  Glasses: IconGlasses,
  GlassesOf: IconGlassesOf,
  Instagram: IconInstagram,
  Menu: IconMenu,
  Search: IconSearch,
  SearchLarge: IconSearchLarge,
  Telegram: IconTelegram,
  Egov: LogoEgov,
  EmblemUzbekistan: LogoEmblemUzbekistan,
  LexUz: LogoLexUz,
  MITC: LogoMITC,
  MyGov: LogoMyGov,
  OpenData: LogoOpenData,
  DERC: LogoDERC,
  File: IconFile,
  Close: IconClose,
  Email: IconEmail,
  Phone: IconPhone,
  Time: IconTime,
});
type Logos = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const Logos = (): Logos => ({
  Egov: LogoEgov,
  EmblemUzbekistan: LogoEmblemUzbekistan,
  LexUz: LogoLexUz,
  MITC: LogoMITC,
  MyGov: LogoMyGov,
  OpenData: LogoOpenData,
  DERC: LogoDERC,
});
