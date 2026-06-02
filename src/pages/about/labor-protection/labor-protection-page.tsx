import PageLayout from '@layouts/page-layout';
import { DocumentsBlock } from '@pages/components/DocumentsBlock';
import { t } from 'i18next';

export const LaborProtactionPage = () => {
  return (
    <PageLayout title={t('menu.about.laborProtection')}>
      <DocumentsBlock category="labor-protection" />
    </PageLayout>
  );
};
