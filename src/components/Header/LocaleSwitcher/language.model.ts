import type { ComponentType } from 'react';

import BeFlag from '@assets/flags/be.svg?react';
import GbFlag from '@assets/flags/gb.svg?react';
import RuFlag from '@assets/flags/ru.svg?react';

export type LanguageKey = 'be' | 'gb' | 'ru';

export type Language = {
  key: LanguageKey;
  label: string;
  Flag: ComponentType;
};

export const LANGUAGES: Language[] = [
  {
    key: 'be',
    label: 'BE',
    Flag: BeFlag,
  },
  {
    key: 'gb',
    label: 'EN',
    Flag: GbFlag,
  },
  {
    key: 'ru',
    label: 'RU',
    Flag: RuFlag,
  },
];
