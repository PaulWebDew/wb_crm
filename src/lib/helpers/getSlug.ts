export const getSlug = (title: string) => {
  return encodeURIComponent(title.trim().toLowerCase().replace(/\s+/g, '-'));
};
