import { ROUTES } from '@shared/navigation/routes';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

import i18n from 'src/i18n';

export const ErrorPage = () => {
  return (
    <Result
      status="error"
      title={i18n.t('error.title')}
      subTitle={i18n.t('error.subTitle')}
      extra={
        <Link to={ROUTES.HOME}>
          <Button type="primary" size="large">
            {i18n.t('buttons.backToHomePage')}
          </Button>
        </Link>
      }
    />
  );
};
