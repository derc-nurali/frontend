import { useContext } from 'react';
import { LayoutContext } from './LayoutProvider';

export const useLayout = () => {
  return useContext(LayoutContext);
};
