import { MenuOutlined } from '@ant-design/icons';
import { getMenuConfig } from '@shared/navigation/navbar.config';
import { Button, Drawer, Menu } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './style.module.scss';

const MobileBurger = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const items = getMenuConfig(t);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={handleToggleMenu}
        className={styles.button}
      />
      <Drawer placement="right" open={isOpen} onClose={handleCloseMenu} className={styles.drower}>
        <Menu
          mode="inline"
          items={items}
          onClick={handleCloseMenu}
          className={styles.drower__menu}
        />
      </Drawer>
    </>
  );
};

export default MobileBurger;
