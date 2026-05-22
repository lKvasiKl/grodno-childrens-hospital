import { MenuOutlined } from '@ant-design/icons';
import { getMenuConfig } from '@shared/navigation/navigation.config';
import { MENU_ITEM_TYPE } from '@shared/navigation/types';
import { Button, Drawer, Menu } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { buildMenuIndex } from '@shared/navigation/build-menu-index';
import { mapMenuItems } from '@shared/navigation/map-menu-items';

import styles from './style.module.scss';

type Props = {
  className?: string;
};

const MobileBurger = ({ className }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menu = getMenuConfig(t);

  const menuIndex = useMemo(() => buildMenuIndex(menu), [menu]);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    const item = menuIndex.get(key);

    if (item?.type === MENU_ITEM_TYPE.EXTERNAL) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      handleCloseMenu();
      return;
    }

    navigate(key);
    handleCloseMenu();
  };

  return (
    <>
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={handleToggleMenu}
        className={`${styles.button} ${className ?? ''}`}
      />

      <Drawer placement="right" open={isOpen} onClose={handleCloseMenu} className={styles.drawer}>
        <Menu
          mode="inline"
          items={mapMenuItems(menu)}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname]}
          className={styles.drawer__menu}
        />
      </Drawer>
    </>
  );
};

export default MobileBurger;
