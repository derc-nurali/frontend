import React, { ComponentType } from 'react';
import clsx from 'clsx';
import { isEmpty, orderBy } from 'lodash';
import { Box, Collapse, Grid, SvgIcon, Typography } from '@mui/material';
import { DataGrid } from '../../data-grid';
import { StaffCard } from '../../staff';
import useStyles from './styles';
import { IconArrowLarge } from '../../icons';
import { useResponsive, useToggle } from '../../../hooks';
import { useTranslation } from 'next-i18next';

interface SubdivisionsCardProps {
  className?: string;
  data: Record<string, any>;
}

export const SubdivisionsCard: ComponentType<SubdivisionsCardProps> = ({ className, data }) => {
  const classes = useStyles();
  const r = useResponsive();
  const { t } = useTranslation();
  const [isCollapsed, toggleCollapse] = useToggle(false);

  const { title, staffs } = data;
  const orderedStaffs = orderBy(staffs, (x) => x.weight);
  const [leader, ...others] = orderedStaffs;

  return (
    <Box className={clsx(classes.root, className)}>
      <Grid container spacing={4} alignItems="center" mb={!isEmpty(others) ? 2 : 0}>
        <Grid item xs={12} md={6} lg={7}>
          <Typography variant="subtitle2" color="primary.dark" component="div">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          {!isEmpty(leader) && (
            <StaffCard variant={r({ xs: 'medium', md: 'small' })} item={leader} />
          )}
        </Grid>
      </Grid>
      {!isEmpty(others) && (
        <>
          <Collapse in={isCollapsed}>
            <Box mb={2}>
              <DataGrid
                data={others}
                flexDirection="column"
                columnSpacing={2}
                renderItem={(item) => <StaffCard item={item} />}
              />
            </Box>
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
        </>
      )}
    </Box>
  );
};
