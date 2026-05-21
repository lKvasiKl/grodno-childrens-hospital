import { MenuOutlined } from '@ant-design/icons';
import { getMenuConfig } from '@shared/navigation/navigation.config';
import { Button, Drawer, Menu } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './style.module.scss';

type Props = {
  className?: string;
};

const MobileBurger = ({ className }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const items = getMenuConfig(t);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
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
          items={items}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname]}
          className={styles.drawer__menu}
        />
      </Drawer>
    </>
  );
};

export default MobileBurger;
