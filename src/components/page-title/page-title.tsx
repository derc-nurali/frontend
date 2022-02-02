import { Theme, Typography } from '@mui/material';
import { SpacingProps, SxProps, TypographyProps } from '@mui/system';
import { ComponentType } from 'react';

interface PageTitleProps extends SpacingProps, TypographyProps {
  title: string;
  sx?: SxProps<Theme>;
}

export const PageTitle: ComponentType<PageTitleProps> = ({ title, ...props }) => {
  return (
    <Typography variant="h3" component={'h1'} mb={3} color={'primary'} {...props}>
      {title}
    </Typography>
  );
};
