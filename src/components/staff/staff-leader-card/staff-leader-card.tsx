import { ComponentType } from 'react';
import { IconArrowLarge, IconEmail, IconPhone, IconTime } from '../../icons';
import clsx from 'clsx';
import Image from 'next/image';
import { get } from 'lodash';
import { useResponsive, useToggle } from '../../../hooks';
import { useTranslation } from 'next-i18next';
import { Grid, Typography, Box, Stack, SvgIcon, Collapse } from '@mui/material';
import { PHOTO_PLACEHOLDER } from '../../../constants/base.constants';
import useStyles from './styles';

interface StaffLeaderCardProps {
  className?: string;
  item: Record<string, any>;
}

export const StaffLeaderCard: ComponentType<StaffLeaderCardProps> = ({ className, item }) => {
  const classes = useStyles();
  const r = useResponsive();
  const { t } = useTranslation();
  const [isCollapsed, toggleCollapse] = useToggle(false);
  const { fullName, position, cover, phone, email, daysOfAdmission, description } = item;
  const img = get(cover, 'thumbnails.medium.url', PHOTO_PLACEHOLDER);

  return (
    <Grid className={clsx(className, classes.root)} container spacing={6}>
      <Grid item xs={12} sm={4} lg="auto">
        <Box component="figure" className={clsx(classes.figure)}>
          <Image src={img} width={250} height={370} alt={fullName} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} lg={8} xl={9}>
        <Typography
          variant={r({ xs: 'h3', md: 'h2' })}
          component="h2"
          color="primary.main"
          sx={{ textTransform: 'uppercase' }}
          mb={1.5}
        >
          {fullName}
        </Typography>
        <Typography variant="subtitle2" component="div" color="primary.dark" mb={3.75}>
          {position}
        </Typography>
        <Stack direction={r({ xs: 'column', xl: 'row' })} spacing={r({ xs: 2, xl: 7 })} mb={3.75}>
          {phone && (
            <div className={clsx(classes.contact)}>
              <SvgIcon component={IconPhone} viewBox="0 0 24 24" />
              <Typography
                variant="body1"
                color="primary.dark"
                component="a"
                href={`tel:${phone.replace(/-|\s/g, '')}`}
              >
                {phone}
              </Typography>
            </div>
          )}
          <div className={clsx(classes.contact)}>
            <SvgIcon component={IconEmail} viewBox="0 0 24 24" />
            <Typography variant="body1" color="primary.dark" component="a" href={`mailto:${email}`}>
              {email}
            </Typography>
          </div>
          <div className={clsx(classes.contact)}>
            <SvgIcon component={IconTime} viewBox="0 0 24 24" />
            <Typography variant="body1" component="span">
              {daysOfAdmission}
            </Typography>
          </div>
        </Stack>
        <Collapse in={isCollapsed} collapsedSize={r({ xs: 150, md: 140, xl: 120 })}>
          <Typography
            variant="body2"
            component="div"
            dangerouslySetInnerHTML={{ __html: description }}
          />
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
      </Grid>
    </Grid>
  );
};
