import type { Page } from '@shared/types/page.types';

type Props = Pick<Page, 'content'>;

export const TextBlock = ({ content }: Props) => {
  if (!content?.length) return null;

  return (
    <div>
      {content.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={index}>{block.children?.map((c) => c.text)}</p>;
        }
        return null;
      })}
    </div>
  );
};
