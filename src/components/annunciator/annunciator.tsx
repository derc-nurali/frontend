import { ComponentType } from 'react';
import { Typography } from '@mui/material';
import useStyles from './styles';
import clsx from 'clsx';

interface AnnunciatorProps {
  className?: string;
  title?: string;
  text?: string;
}

export const Annunciator: ComponentType<AnnunciatorProps> = ({ className, title, text }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {title && (
        <Typography className={clsx(classes.title)} variant="h3" component="div" mb={0.5}>
          {title}
        </Typography>
      )}
      {text && (
        <Typography variant="body2" component="p" color="grey.400" mb={0}>
          {text}
        </Typography>
      )}
    </div>
  );
};
