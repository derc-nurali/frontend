import { Locale, LOCALE_EN, LOCALE_RU, LOCALE_UZ } from './locales.constants';

interface PagesProps {
  about: string;
  mission: string;
  goal: string;
  vision: string;
  cooperation: string;
  //strategy: string;
}

export const ABOUT_PAGES_ID: Record<Locale, PagesProps> = {
  [LOCALE_RU]: {
    about: process.env.NEXT_PUBLIC_ABOUT_ID_RU || '14',
    mission: process.env.NEXT_PUBLIC_ABOUT_ID_MISSION_RU || '18',
    goal: process.env.NEXT_PUBLIC_ABOUT_ID_GOAL_RU || '22',
    vision: process.env.NEXT_PUBLIC_ABOUT_ID_VISION_RU || '26',
    cooperation: process.env.NEXT_PUBLIC_ABOUT_ID_COOPERATION_RU || '36',
    //strategy: process.env.NEXT_PUBLIC_ABOUT_ID_STRATEGY_RU || '30',
  },
  [LOCALE_UZ]: {
    about: process.env.NEXT_PUBLIC_ABOUT_ID_UZ || '16',
    mission: process.env.NEXT_PUBLIC_ABOUT_ID_MISSION_UZ || '20',
    goal: process.env.NEXT_PUBLIC_ABOUT_ID_GOAL_UZ || '23',
    vision: process.env.NEXT_PUBLIC_ABOUT_ID_VISION_UZ || '28',
    cooperation: process.env.NEXT_PUBLIC_ABOUT_ID_COOPERATION_UZ || '38',
    //strategy: process.env.NEXT_PUBLIC_ABOUT_ID_COOPERATION_UZ || '37',
  },
  [LOCALE_EN]: {
    about: process.env.NEXT_PUBLIC_ABOUT_ID_EN || '15',
    mission: process.env.NEXT_PUBLIC_ABOUT_ID_MISSION_EN || '19',
    goal: process.env.NEXT_PUBLIC_ABOUT_ID_GOAL_EN || '25',
    vision: process.env.NEXT_PUBLIC_ABOUT_ID_VISION_EN || '27',
    cooperation: process.env.NEXT_PUBLIC_ABOUT_ID_COOPERATION_EN || '37',
    //strategy: process.env.NEXT_PUBLIC_ABOUT_ID_STRATEGY_EN || '31',
  },
};

export const PRIVACY_POLICY_ID: Record<Locale, string> = {
  [LOCALE_RU]: process.env.NEXT_PUBLIC_PRIVACY_POLICY_ID || '40',
  [LOCALE_UZ]: process.env.NEXT_PUBLIC_PRIVACY_POLICY_UZ || '42',
  [LOCALE_EN]: process.env.NEXT_PUBLIC_PRIVACY_POLICY_EN || '41',
};
