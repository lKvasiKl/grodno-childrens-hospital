import { useDocumentsQuery } from '@hooks/useDocumentsQuery';
import { DocumentCard } from '@pages/components/DocumentCard';
import { PageSkeleton } from '@pages/components/PageSkeleton';
import { mapDocuments } from '@utils/document.mapper';
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';

import ErrorPage from '@pages/error';

import styles from './style.module.scss';

type Props = {
  category?: string;
  type?: string;
};

export const DocumentsBlock = ({ category }: Props) => {
  const { i18n } = useTranslation();

  const { data, isLoading, isError } = useDocumentsQuery({
    locale: i18n.language,
    category,
  });

  if (isLoading) return <PageSkeleton />;
  if (isError) return <ErrorPage />;
  if (!data?.length) return <Empty description="Документы не найдены" />;

  const documents = mapDocuments(data);

  return (
    <div className={styles.list}>
      {documents.map((doc) => (
        <DocumentCard key={doc.id} title={doc.title} fileUrl={doc.fileUrl} />
      ))}
    </div>
  );
};
