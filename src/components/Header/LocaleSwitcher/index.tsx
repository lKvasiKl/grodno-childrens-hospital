import { Button, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';

import { getLanguageItems } from './language.lib';
import { DEFAULT_LANGUAGE, LANGUAGES } from './language.model';

import styles from './style.module.scss';

const LocaleSwitcher = () => {
  const { i18n } = useTranslation();

  const items = getLanguageItems(i18n.changeLanguage);

  const currentLang = LANGUAGES.find((lang) => lang.key === i18n.language) ?? DEFAULT_LANGUAGE;
  const CurrentFlag = currentLang.Flag;

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
      <Button ghost className={styles.langButton}>
        <CurrentFlag />
        {currentLang.label}
      </Button>
    </Dropdown>
  );
};

export default LocaleSwitcher;
