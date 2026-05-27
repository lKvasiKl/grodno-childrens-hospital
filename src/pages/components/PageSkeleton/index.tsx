import { Skeleton } from 'antd';

import styles from './style.module.scss';

interface Props {
  galleryItems?: number;
}

export const PageSkeleton = ({ galleryItems = 0 }: Props) => {
  return (
    <>
      <Skeleton active title={{ width: 300 }} paragraph={{ rows: 1 }} />

      {galleryItems > 0 && (
        <div className={styles.gallery}>
          {Array.from({ length: galleryItems }).map((_, index) => (
            <Skeleton.Image key={index} active className={styles.image} />
          ))}
        </div>
      )}

      <Skeleton active paragraph={{ rows: 8 }} />
    </>
  );
};
