import { ComponentType } from 'react';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import Link from 'next/link';
import { toUrl } from '../../../common/utils/format-utils';
import { ROUTES } from '../../../constants/routes.constants';
import useStyles from './styles';

interface AchievementsCardProps {
  item: Record<string, any>;
  variant?: 'default' | 'inverse';
}

export const AchievementsCard: ComponentType<AchievementsCardProps> = ({
  item,
  variant = 'default',
}) => {
  const classes = useStyles();

  const { title, completedAt } = item;
  const url = toUrl(ROUTES.ACHIEVEMENTS.ROOT, item);
  // #TODO https://date-fns.org/v2.27.0/docs/I18n-Contribution-Guide
  // https://dev.egov.uz/frontend/attestat/-/blob/develop/src/hooks/useDate.ts
  // https://material-ui-pickers.dev/localization/date-fns
  return (
    <Link href={url}>
      <a className={clsx(classes.root, classes[variant])} title={title}>
        <Typography variant="h4" component="div" className={classes.date}>
          {format(new Date(completedAt), 'dd iiii', { locale: ruLocale })}
        </Typography>
        <Typography variant="caption" component="div" className={classes.year} my={2.5}>
          {format(new Date(completedAt), 'yyyy')}
        </Typography>
        <Typography variant="body1" component="div" className={classes.title}>
          {title}
        </Typography>
      </a>
    </Link>
  );
};
