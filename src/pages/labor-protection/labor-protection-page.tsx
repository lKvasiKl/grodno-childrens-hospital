import PageLayout from '@layouts/page-layout';
import { LABOR_PROTECTION_PDF } from '@shared/constants/documents';

import styles from './style.module.scss';

export const LaborProtactionPage = () => {
  return (
    <PageLayout title="menu.about.laborProtection">
      <iframe src={LABOR_PROTECTION_PDF} className={styles.iframe} />
    </PageLayout>
  );
};
