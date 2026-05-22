import { PdfViewerPage } from '@pages/components/PdfViewerPage';
import { LABOR_PROTECTION_PDF } from '@shared/constants/documents';

export const LaborProtactionPage = () => {
  return <PdfViewerPage title="menu.about.laborProtection" src={LABOR_PROTECTION_PDF} />;
};
