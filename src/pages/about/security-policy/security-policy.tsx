import PageLayout from '@layouts/page-layout';
import { DocumentsBlock } from '@pages/components/DocumentsBlock';
import { t } from 'i18next';

export const SecurityPolicyPage = () => {
  return (
    <PageLayout title={t('menu.about.securityPolicy')}>
      <DocumentsBlock category="security-policy" />
    </PageLayout>
  );
};
