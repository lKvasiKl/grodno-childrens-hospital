import { LANGUAGES } from './language.model';

import styles from './style.module.scss';

export const getLanguageItems = (onChange: (lng: string) => void) =>
  LANGUAGES.map(({ key, label, Flag }) => ({
    key,
    label: (
      <span className={styles.dropdownItem}>
        <Flag />
        {label}
      </span>
    ),
    onClick: () => onChange(key),
  }));
