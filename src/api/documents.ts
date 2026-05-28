import { api } from '@api/client';
import type { Document } from '@shared/types/document.types';

interface GetDocumentsParams {
  locale: string;
  category?: string;
}

interface StrapiResponse {
  data: Document[];
}

export const getDocuments = async ({ locale, category }: GetDocumentsParams) => {
  const response = await api.get<StrapiResponse>('/api/document-items', {
    params: {
      locale,
      populate: '*',
      sort: 'order:asc',

      ...(category && {
        'filters[category][$eq]': category,
      }),
    },
  });

  const docs = response.data?.data;

  if (!docs) {
    throw new Error('Documents not found');
  }

  return docs;
};
