import { ComponentType } from 'react';
import { CircularProgress } from '@mui/material';
import clsx from 'clsx';
import useStyles from './styles';

interface LoaderProps {
  className?: string;
  size?: number;
  minHeight?: string;
}

export const Loader: ComponentType<LoaderProps> = ({
  className,
  size = 64,
  minHeight = '100%',
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} style={{ display: 'flex', minHeight }}>
      <CircularProgress color="info" size={size} />
    </div>
  );
};
