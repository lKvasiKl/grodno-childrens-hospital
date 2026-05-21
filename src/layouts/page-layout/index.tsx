import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './style.module.scss';

const { Title } = Typography;

type Props = {
  title: string;
  children: React.ReactNode;
};

const PageLayout = ({ title, children }: Props) => {
  const { t } = useTranslation();

  return (
    <section className={styles.page}>
      <div className={styles.page__container}>
        <Title level={2} className={styles.page__title}>
          {t(title).toUpperCase()}
        </Title>
        <div className={styles.page__content}>{children}</div>
      </div>
    </section>
  );
};

export default PageLayout;
