import { getMenuConfig } from '@shared/navigation/navigation.config';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { buildMenuIndex } from '@shared/navigation/build-menu-index';
import { mapMenuItems } from '@shared/navigation/map-menu-items';
import { MENU_ITEM_TYPE } from '@shared/navigation/types';
import { useMemo } from 'react';
import styles from './style.module.scss';

const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const menu = getMenuConfig(t);

  const menuIndex = useMemo(() => buildMenuIndex(menu), [menu]);

  const handleOnMenuItemClick = ({ key }: { key: string }) => {
    const item = menuIndex.get(key);

    if (item?.type === MENU_ITEM_TYPE.EXTERNAL) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }

    navigate(key);
  };

  return (
    <Menu
      mode="horizontal"
      items={mapMenuItems(menu)}
      className={styles.desktopMenu}
      selectedKeys={[location.pathname]}
      overflowedIndicator={null}
      onClick={handleOnMenuItemClick}
      disabledOverflow
    />
  );
};

export default NavBar;
