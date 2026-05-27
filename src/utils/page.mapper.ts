import type { Page } from '@shared/types/page.types';

export const mapPage = (data: any): Page => {
  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    content: data.content,
    gallery: data.gallery,
  };
};
