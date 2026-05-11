import InstagramIcon from '@assets/icons/instagram.svg?react';
import TelegramIcon from '@assets/icons/telegram.svg?react';

import type { ComponentType, SVGProps } from 'react';

import { SOCIAL_LINKS } from '@shared/config/socials';

export type SocialLinkItem = {
  key: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const SOCIAL_LINKS_ITEMS: SocialLinkItem[] = [
  {
    key: 'telegram',
    href: SOCIAL_LINKS.telegram,
    Icon: TelegramIcon,
  },
  {
    key: 'hospitalInstagram',
    href: SOCIAL_LINKS.hospitalInstagram,
    Icon: InstagramIcon,
  },
  {
    key: 'tradeUnionInstagram',
    href: SOCIAL_LINKS.tradeUnionInstagram,
    Icon: InstagramIcon,
  },
] as const;
