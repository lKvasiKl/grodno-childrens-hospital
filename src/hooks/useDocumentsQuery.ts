import { getDocuments } from '@api/documents';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface Props {
  locale: string;
  category?: string;
}

export const useDocumentsQuery = ({ locale, category }: Props) => {
  return useQuery({
    queryKey: ['documents', locale, category],
    queryFn: () => getDocuments({ locale, category }),
    placeholderData: keepPreviousData,
  });
};
