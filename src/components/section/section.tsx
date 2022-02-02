import { Box, Container } from '@mui/material';
import { BoxProps } from '@mui/system';
import clsx from 'clsx';
import React, { ComponentType } from 'react';
import { useThemeChange } from '../../common/theme/useThemeChange';
import useStyles from './styles';

interface SectionProps {
  className?: string;
  variant?: 'default' | 'rounded';
}

export const Section: ComponentType<SectionProps & BoxProps> = ({
  className,
  children,
  variant = 'default',
  sx,
  ...props
}) => {
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';

  const classes = useStyles({ a11yMode });

  return (
    <Box
      className={clsx(classes.root, className, classes[variant])}
      component={props.component ? props.component : 'section'}
      sx={{
        pt: 15,
        pb: 15,
        color: 'primary.dark',
        background: `no-repeat 0 100%`,
        bgcolor: 'background.paper',
        backgroundImage: a11yMode ? 'none' : 'url("/images/bg_waves.svg")',
        backgroundSize: '100% auto',
        ...sx,
      }}
      {...props}
    >
      <Container className={classes.container}>{children}</Container>
    </Box>
  );
};
