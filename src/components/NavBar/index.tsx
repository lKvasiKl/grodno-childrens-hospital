import { getMenuConfig } from '@shared/navigation/navbar.config';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './style.module.scss';

const NavBar = () => {
  const { t } = useTranslation();
  const items = getMenuConfig(t);

  return <Menu mode="horizontal" items={items} className={styles.desktopMenu} />;
};

export default NavBar;
