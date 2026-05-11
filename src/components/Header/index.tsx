import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { useTranslation } from 'react-i18next';

import SocialLinks from './SocialLinks';
import styles from './style.module.scss';

const AppHeader = () => {
  const { t } = useTranslation();

  return (
    <Header className={styles.header}>
      <Button type="primary" className={styles.header__button}>
        {t('buttons.appointmentButton')}
      </Button>
      <SocialLinks />
    </Header>
  );
};

export default AppHeader;
