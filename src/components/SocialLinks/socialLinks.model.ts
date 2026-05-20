import InstagramIcon from '@assets/icons/instagram.svg?react';
import TelegramIcon from '@assets/icons/telegram.svg?react';

import type { ComponentType, SVGProps } from 'react';

import { LINKS } from '@shared/config/links';

export type SocialLinkItem = {
  key: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const SOCIAL_LINKS_ITEMS: SocialLinkItem[] = [
  {
    key: 'telegram',
    href: LINKS.social.telegram,
    Icon: TelegramIcon,
  },
  {
    key: 'hospitalInstagram',
    href: LINKS.social.hospitalInstagram,
    Icon: InstagramIcon,
  },
  {
    key: 'tradeUnionInstagram',
    href: LINKS.social.tradeUnionInstagram,
    Icon: InstagramIcon,
  },
] as const;
