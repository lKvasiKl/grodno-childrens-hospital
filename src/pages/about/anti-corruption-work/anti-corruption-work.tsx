import { DocumentsBlock } from '@pages/components/DocumentsBlock';
import { t } from 'i18next';

import PageLayout from '@layouts/page-layout';

export const AntiCorruptionWorkPage = () => {
  return (
    <PageLayout title={t('menu.about.anticorruption')}>
      <DocumentsBlock category="corruption" />
    </PageLayout>
  );
};
