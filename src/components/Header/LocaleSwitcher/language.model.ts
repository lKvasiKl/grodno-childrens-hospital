import type { ComponentType } from 'react';

import BeFlag from '@assets/icons/be.svg?react';
import GbFlag from '@assets/icons/gb.svg?react';
import RuFlag from '@assets/icons/ru.svg?react';

export const LANGUAGE_KEYS = {
  BE: 'be',
  GB: 'gb',
  RU: 'ru',
} as const;

export type LanguageKey = (typeof LANGUAGE_KEYS)[keyof typeof LANGUAGE_KEYS];

export type Language = {
  key: LanguageKey;
  label: string;
  Flag: ComponentType;
};

export const DEFAULT_LANGUAGE: Language = {
  key: LANGUAGE_KEYS.RU,
  label: 'RU',
  Flag: RuFlag,
};

export const LANGUAGES: Language[] = [
  {
    key: LANGUAGE_KEYS.BE,
    label: 'BE',
    Flag: BeFlag,
  },
  {
    key: LANGUAGE_KEYS.GB,
    label: 'EN',
    Flag: GbFlag,
  },
  DEFAULT_LANGUAGE,
];
