import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';

import styles from './style.module.scss';

const AppHeader = () => {
  return (
    <>
      <Header className={styles.header}>
        <Button type="primary">Запись на платные услуги</Button>
      </Header>
    </>
  );
};

export default AppHeader;
