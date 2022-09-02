import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 425px)',
  '(min-width: 426px) and (max-width: 1023)',
  '(min-width: 1024px)',
];

export const useMatchMedia = () => {
  let mediaQueryLists;
  let getValues;

  if (typeof window !== 'undefined') {
    mediaQueryLists = queries.map((query) => matchMedia(query));
    getValues = mediaQueryLists.map((mql) => mql.matches);
  } else {
    mediaQueryLists = [];
  }

  const [values, setValues] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener('change', handler)
      );
  });

  const media: Record<any, any> = ['isMobile', 'isTablet', 'isDestktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
  return media;
};
