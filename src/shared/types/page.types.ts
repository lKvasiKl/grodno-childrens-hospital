export type PageBlock =
  | {
      type: 'paragraph';
      children: { type: 'text'; text: string }[];
    }
  | {
      type: 'image';
      image: Media;
    };

export interface Media {
  id: number;
  url: string;
  name: string;
  alternativeText?: string | null;
}

export interface Page {
  id: number;
  title: string;
  slug: string;
  content?: PageBlock[];
  gallery?: Media[];
}
