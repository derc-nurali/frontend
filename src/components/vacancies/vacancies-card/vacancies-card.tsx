import React, { ComponentType } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Collapse, SvgIcon, Typography } from '@mui/material';
import { IconArrowLarge } from '../../icons';
import { useTranslation } from 'next-i18next';
import { useToggle } from '../../../hooks';
import { VacanciesApplyForm } from '../vacancies-apply-form';

interface VacanciesCardProps {
  className?: string;
  item: Record<string, any>;
}

export const VacanciesCard: ComponentType<VacanciesCardProps> = ({ className, item }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isCollapsed, toggleCollapse] = useToggle(false);

  const { id, title, description } = item;

  return (
    <div className={clsx(classes.root, className)}>
      <Typography variant="subtitle2" color="primary" mb={2}>
        {title}
      </Typography>
      <Collapse in={isCollapsed}>
        <Typography
          variant="body2"
          fontWeight="500"
          component="div"
          className={clsx(classes.text)}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <VacanciesApplyForm className={classes.form} vacancyId={id} />
      </Collapse>
      <Typography
        onClick={toggleCollapse}
        variant="body3"
        component="button"
        color="primary.main"
        type="button"
        className={clsx(classes.toggler, {
          [classes.togglerInverse]: isCollapsed,
        })}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        {isCollapsed ? t('action.collapse', 'Сверунть') : t('action.more', 'Подробнее')}
        <SvgIcon component={IconArrowLarge} viewBox="0 0 32 32" />
      </Typography>
    </div>
  );
};
