import { Button, Dropdown } from 'antd';
import type { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { getLanguageItems } from './language.lib';

type LocaleSwitcherProps = Omit<ComponentProps<typeof Dropdown>, 'menu'>;

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const { i18n } = useTranslation();

  const items = getLanguageItems(i18n.changeLanguage);

  return (
    <Dropdown menu={{ items }} placement="bottomRight" {...props}>
      <Button>{i18n.language.toUpperCase()}</Button>
    </Dropdown>
  );
};

export default LocaleSwitcher;
