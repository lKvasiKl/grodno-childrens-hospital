import { api } from '@api/client';
import type { Page } from '@shared/types/page.types';
import { mapPage } from '@utils/page.mapper';

interface GetPageParams {
  slug: string;
  locale: string;
}

interface StrapiResponse {
  data: Page[];
}

export const getPage = async ({ slug, locale }: GetPageParams): Promise<Page> => {
  const response = await api.get<StrapiResponse>('/api/pages', {
    params: {
      'filters[slug][$eq]': slug,
      locale,
      populate: '*',
    },
  });

  const page = response.data?.data?.[0];

  if (!page) {
    throw null;
  }

  return mapPage(page);
};
