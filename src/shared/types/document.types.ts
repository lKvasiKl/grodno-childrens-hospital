export interface DocumentFile {
  id: number;
  name: string;
  url: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl: string | null;
}

export interface Document {
  id: number;
  documentId: string;
  title: string;
  category: string;
  order: number;
  file: DocumentFile;
}
