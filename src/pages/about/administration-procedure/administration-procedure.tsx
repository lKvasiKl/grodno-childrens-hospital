import { PdfViewerPage } from '@pages/components/PdfViewerPage';
import { ADMINISTRATIVE_PROCEDURES_PDF } from '@shared/constants/documents';

export const AdministrativeProceduresPage = () => {
  return (
    <PdfViewerPage
      title="menu.about.administrativeProcedures"
      src={ADMINISTRATIVE_PROCEDURES_PDF}
    />
  );
};
