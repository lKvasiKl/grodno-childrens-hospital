import AppLayout from '@layouts/app-layout';
import { Spin } from 'antd';
import { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageLayout from '@layouts/page-layout';
import { ROUTES } from '@shared/navigation/routes';

const SecurityPolicyPage = lazy(() => import('@pages/about/security-policy'));
const AdministrativeProceduresPage = lazy(() => import('@pages/about/administration-procedure'));
const LaborProtactionPage = lazy(() => import('@pages/about/labor-protection'));

export const Router = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin fullscreen size="large" />}>
        <Routes>
          <Route element={<AppLayout isMobile={isMobile} />}>
            <Route path={ROUTES.HOME} element={<PageLayout title="Home">HOME PAGE</PageLayout>} />

            <Route path={ROUTES.ABOUT.SECURITY_POLICY} element={<SecurityPolicyPage />} />
            <Route
              path={ROUTES.ABOUT.ADMINISTRATIVE_PROCEDURES}
              element={<AdministrativeProceduresPage />}
            />
            <Route path={ROUTES.ABOUT.LABOR_PROTECTION} element={<LaborProtactionPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
