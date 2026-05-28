import { DownloadOutlined, EyeOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Card, Tooltip } from 'antd';
import type { FC } from 'react';

import styles from './style.module.scss';

const STRAPI_URL = import.meta.env.VITE_BASE_API_URL;

type Props = {
  title: string;
  fileUrl: string;
};

export const DocumentCard: FC<Props> = ({ title, fileUrl }) => {
  const fullUrl = `${STRAPI_URL}${fileUrl}`;

  const handleOpen = () => {
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    window.open(`${fullUrl}?download=true`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      hoverable
      className={styles.card}
      actions={[
        <Tooltip title="Открыть" key="open">
          <EyeOutlined onClick={handleOpen} />
        </Tooltip>,
        <Tooltip title="Скачать" key="download">
          <DownloadOutlined onClick={handleDownload} />
        </Tooltip>,
      ]}
    >
      <div className={styles.card__content}>
        <FilePdfOutlined className={styles.card__icon} />
        <span className={styles.card__title}>{title}</span>
      </div>
    </Card>
  );
};
