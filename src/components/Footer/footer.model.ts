type TFunction = (key: string) => string;

export const getCopyright = (t: TFunction) => {
  const currentYear = new Date().getFullYear();

  return `© ${currentYear}-${currentYear + 1}, ${t('footer')}`;
};
