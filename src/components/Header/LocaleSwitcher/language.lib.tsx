import { LANGUAGES } from './language.model';

export const getLanguageItems = (onChange: (lng: string) => void) =>
  LANGUAGES.map(({ key, label, Flag }) => ({
    key,
    label: (
      <span>
        <Flag />
        {label}
      </span>
    ),
    onClick: () => onChange(key),
  }));
