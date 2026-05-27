import { getPage } from '@api/pages';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface Props {
  slug: string;
}

interface Props {
  slug: string;
  locale: string;
}

export const usePageQuery = ({ slug, locale }: Props) => {
  return useQuery({
    queryKey: ['page', slug, locale],
    queryFn: () => getPage({ slug, locale }),
    placeholderData: keepPreviousData,
  });
};
