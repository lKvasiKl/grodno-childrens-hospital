import { ROUTES } from '@shared/navigation/routes';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

import i18n from 'src/i18n';

export const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle={i18n.t('error.notFound')}
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
