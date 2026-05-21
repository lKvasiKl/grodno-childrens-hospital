import { Image, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const { Title } = Typography;

const symbolsImage = '/images/national-symbols-of-Belarus.png';
const qualityImage = '/images/quality-of-services-bel.png';

import { LINKS } from '@shared/config/links';

const QUALITY_IMAGE_WIDTH = 100;

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <Image preview={false} src={symbolsImage} className={styles.hero__symbolsImage} />
      <Title className={styles.hero__title}>{t('hospitalName')}</Title>
      <a
        href={LINKS.official.qualityPortal}
        target="_blank"
        rel="noreferrer"
        className={styles.hero__link}
      >
        <Image width={QUALITY_IMAGE_WIDTH} preview={false} src={qualityImage} />
      </a>
    </section>
  );
};

export default HeroBanner;
