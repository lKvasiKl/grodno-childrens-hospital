import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

import SocialLinks from '../SocialLinks';
import { getCopyright } from './footer.model';
import styles from './style.module.scss';

const { Footer } = Layout;

const AppFooter = ({ isMobile }: { isMobile: boolean }) => {
  const { t } = useTranslation();

  return (
    <Footer className={styles.footer}>
      {getCopyright(t)}
      {isMobile && <SocialLinks />}
    </Footer>
  );
};

export default AppFooter;
