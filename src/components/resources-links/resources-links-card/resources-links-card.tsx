import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { ComponentType } from 'react';
import { Logos } from '../../icons';
import useStyles from './styles';

interface ResourcesLinksCardProps {
  item: any;
}

export const ResourcesLinksCard: ComponentType<ResourcesLinksCardProps> = ({ item }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const LogoSvg = Logos();
  const Logo = LogoSvg[item.logo];

  return (
    <a
      href={item.path}
      className={classes.root}
      title={t(item.label, item.labelKey)}
      target="_blank"
      rel="noreferrer"
    >
      <div className={classes.media}>
        <Logo className={classes.img} viewBox={`0 0 ${item.width} ${item.height}`} />
      </div>
      <Typography className={classes.title} variant="caption" component="div">
        {t(item.labelKey, item.label)}
      </Typography>
    </a>
  );
};
