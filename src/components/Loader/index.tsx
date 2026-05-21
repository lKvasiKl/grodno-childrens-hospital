import { Spin } from 'antd';

import styles from './style.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
