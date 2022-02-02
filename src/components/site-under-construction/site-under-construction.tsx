import { ComponentType, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useResponsive } from '../../hooks';
import useStyles from './styles';

export const SiteUnderConstruction: ComponentType = ({ children }) => {
  const classes = useStyles();
  const r = useResponsive();
  const [underConstruction, setUnderConstruction] = useState('');

  useEffect(() => {
    setUnderConstruction(localStorage.getItem('UNDER_CONSTRUCTION') || '');
  }, []);

  const isUnderConstruction =
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true' && underConstruction !== 'false';

  return isUnderConstruction ? (
    <div className={classes.root}>
      <Typography variant={r({ xs: 'h4', sm: 'h1' })}>
        На сайте ведутся технические работы
      </Typography>
      <Typography
        variant={r({ xs: 'button', sm: 'subtitle1' })}
        sx={{ mt: r({ xs: 2, sm: 3 }), mb: r({ xs: 4, sm: 5 }) }}
      >
        Приносим извинения за временные неудобства
      </Typography>
      <Image
        src="/images/under-construct.png"
        alt="На сайте ведутся технические работы"
        width="480"
        height="428"
      />
    </div>
  ) : (
    <>{children}</>
  );
};
