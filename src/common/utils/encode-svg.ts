import { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const encodeSvg = (reactElement: ReactElement) => {
  return 'data:image/svg+xml,' + escape(renderToStaticMarkup(reactElement));
};
