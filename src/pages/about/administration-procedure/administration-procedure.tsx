import PageLayout from '@layouts/page-layout';
import { DocumentsBlock } from '@pages/components/DocumentsBlock';
import { t } from 'i18next';

export const AdministrativeProceduresPage = () => {
  return (
    <PageLayout title={t('menu.about.administrativeProcedures')}>
      <DocumentsBlock category="administrative-procedure" />
    </PageLayout>
  );
};
