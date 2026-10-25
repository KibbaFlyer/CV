/** Resolve public assets relative to the GitHub Pages repository path. */
export const getImageUrl = (path: string) =>
  `${import.meta.env.BASE_URL}assets/${path.replace(/^(?:\.\.\/|\.\/|\/)*assets\//, '')}`;
