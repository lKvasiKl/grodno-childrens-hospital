import { PdfViewerPage } from '@pages/components/PdfViewerPage';
import { SECURITY_POLICY_PDF } from '@shared/constants/documents';

export const SecurityPolicyPage = () => {
  return <PdfViewerPage title="menu.about.securityPolicy" src={SECURITY_POLICY_PDF} />;
};
