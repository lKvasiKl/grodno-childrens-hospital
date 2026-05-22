import PageLayout from '@layouts/page-layout';

import styles from './style.module.scss';

type Props = {
  title: string;
  src: string;
};

export const PdfViewerPage = ({ title, src }: Props) => {
  return (
    <PageLayout title={title}>
      <iframe src={src} className={styles.iframe} />
    </PageLayout>
  );
};
