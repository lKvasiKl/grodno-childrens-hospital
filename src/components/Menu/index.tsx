import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { getMenuConfig } from './menu.config';

import styles from './style.module.scss';

const AppMenu = () => {
  const { t } = useTranslation();

  return <Menu mode="horizontal" className={styles.menu} items={getMenuConfig(t)} />;
};

export default AppMenu;
