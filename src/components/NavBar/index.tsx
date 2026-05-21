import { getMenuConfig } from '@shared/navigation/navigation.config';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './style.module.scss';

const NavBar = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const items = getMenuConfig(t);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      mode="horizontal"
      items={items}
      className={styles.desktopMenu}
      selectedKeys={[location.pathname]}
      onClick={handleMenuClick}
      overflowedIndicator={null}
      disabledOverflow
    />
  );
};

export default NavBar;
