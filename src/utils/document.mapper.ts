import type { Document } from '@shared/types/document.types';

export interface MappedDocument {
  id: number;
  title: string;
  order: number;
  fileUrl: string;
}

export const mapDocuments = (items: Document[]): MappedDocument[] => {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    order: item.order,
    fileUrl: item.file.url,
  }));
};
