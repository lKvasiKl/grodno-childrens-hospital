import { SocialLinks } from '@components';
import { Button, Layout } from 'antd';
import { useTranslation } from 'react-i18next';

import LocaleSwitcher from './LocaleSwitcher';
import MobileBurger from './MobileBurger';
import styles from './style.module.scss';

const { Header } = Layout;

const AppHeader = ({ isMobile }: { isMobile: boolean }) => {
  const { t } = useTranslation();

  return (
    <Header className={styles.header}>
      <Button type="primary" className={styles.header__button}>
        {t('buttons.appointment')}
      </Button>
      {!isMobile && <SocialLinks className={styles.header__socials} />}
      <LocaleSwitcher className={styles.header__lang} />
      {isMobile && <MobileBurger className={styles.header__burger} />}
    </Header>
  );
};

export default AppHeader;
