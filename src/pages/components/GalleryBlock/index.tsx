import type { Page } from '@shared/types/page.types';
import { Image } from 'antd';

import styles from './style.module.scss';

const STRAPI_URL = import.meta.env.VITE_BASE_API_URL;

type Props = Pick<Page, 'gallery'>;

export const GalleryBlock = ({ gallery }: Props) => {
  if (!gallery?.length) return null;

  return (
    <div className={styles.gallery}>
      {gallery.map((img) => (
        <div key={img.id} className={styles.gallery__imageWrapper}>
          <Image
            key={img.id}
            src={`${STRAPI_URL}${img.url}`}
            alt={img.name}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};
