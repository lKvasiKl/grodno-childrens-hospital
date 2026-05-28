import { usePageQuery } from '@hooks/usePageQuery';
import { GalleryBlock } from '@pages/components/GalleryBlock';
import { PageSkeleton } from '@pages/components/PageSkeleton';
import { TextBlock } from '@pages/components/TextBlock';
import { useTranslation } from 'react-i18next';

import PageLayout from '@layouts/page-layout';
import ErrorPage from '@pages/error';
import NotFoundPage from '@pages/not-found';

export const HospitalHistoryPage = () => {
  const { i18n } = useTranslation();

  const { data, isLoading, error } = usePageQuery({
    slug: 'hospital-history',
    locale: i18n.language,
  });

  const renderContent = () => {
    if (isLoading) return <PageSkeleton galleryItems={3} />;
    if (error) return <ErrorPage />;
    if (!data) return <NotFoundPage />;

    return (
      <>
        <GalleryBlock gallery={data.gallery} />
        <TextBlock content={data.content} />
      </>
    );
  };

  return <PageLayout title={data?.title ?? ''}>{renderContent()}</PageLayout>;
};
