import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import clsx from 'clsx';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { ComponentType } from 'react';
import { useThemeChange } from '../../common/theme/useThemeChange';
import { PHOTO_PLACEHOLDER } from '../../constants/base.constants';
import { ROUTES } from '../../constants/routes.constants';
import { useResponsive } from '../../hooks';
import { ActivitiesGrid } from '../activities/activities-grid';
import { CooperationBlock } from '../cooperation';
import { Header } from '../header';
import { BaseLayout } from '../layout';
import { Section } from '../section';
import { StaffLeaderGrid } from '../staff';
import { StructureSchema } from '../structure';
import { SubHeader } from '../sub-header';
import useStyles from './styles';

interface AboutProps {
  data: Record<string, any>;
}

export const About: ComponentType<AboutProps> = ({ data }) => {
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';
  const classes = useStyles({ a11yMode });
  const { t } = useTranslation();
  const r = useResponsive();

  const { about, cooperation, leaders, activities } = data;
  const title = t('about', 'О центре');
  const description = get(about, 'description', '');
  const img = get(about, 'cover.thumbnails.medium.url', PHOTO_PLACEHOLDER);

  return (
    <BaseLayout>
      <Section
        variant="rounded"
        component="header"
        sx={{
          pt: 0,
          zIndex: 10,
        }}
      >
        <Header />
        <SubHeader title={title} />
      </Section>
      <Section
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 22.5,
          pb: 15,
          backgroundImage: 'none',
          bgcolor: 'white',
          zIndex: 9,
        }}
      >
        <Grid className={clsx(classes.root)} container justifyContent="space-between">
          <Grid item xs={12} lg={6}>
            <div className={clsx(classes.text)} dangerouslySetInnerHTML={{ __html: description }} />
          </Grid>
          <Grid item xs={12} lg="auto">
            <Box className={clsx(classes.figure)} component="figure">
              <Image src={img} width={520} height={820} alt={title} />
            </Box>
          </Grid>
        </Grid>
      </Section>
      <Section
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 30,
          backgroundImage: 'none',
          bgcolor: 'rinatBlue.light',
          zIndex: 8,
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          color="gradient"
          sx={{ textTransform: 'uppercase' }}
          mb={6.5}
        >
          <div>{t('leadership', 'Руководство')}</div>
        </Typography>
        <StaffLeaderGrid data={leaders.hits} />
      </Section>
      <Section
        variant="rounded"
        sx={{
          color: 'white',
          mt: -15,
          pt: 30,
          background: a11yMode ? 'none' : `url(/images/bg_activity.png) no-repeat 0 100%`,
          backgroundImage: a11yMode
            ? 'none'
            : `image-set(
            url(/images/bg_activity.png) 1x,
            url(/images/bg_activity.png) 2x,
          );`,
          bgcolor: 'primary.dark',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          zIndex: 7,
        }}
      >
        <Box component={Stack} direction={r({ md: 'row' })} alignItems="center" mb={5} sx={{}}>
          <Typography
            variant="h3"
            component="h3"
            color="inherit"
            mr="auto"
            sx={{ textTransform: 'uppercase' }}
          >
            {t('structure', 'Структура')}
          </Typography>
          <Link href={ROUTES.ABOUT.STRUCTURE} passHref>
            <Button component="a" title={t('structure.all', 'Все подразделения')}>
              {t('structure.all', 'Все подразделения')}
            </Button>
          </Link>
        </Box>
        <StructureSchema />
      </Section>
      <Section
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 30,
          backgroundImage: 'none',
          bgcolor: 'rinatGrey.light',
          zIndex: 6,
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          color="gradient"
          sx={{ textTransform: 'uppercase' }}
          mb={5.5}
        >
          <div>{t('activities', 'Деятельность')}</div>
        </Typography>
        <ActivitiesGrid data={activities.hits} />
      </Section>
      <Section
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 30,
          backgroundImage: 'none',
          bgcolor: 'white',
          zIndex: 5,
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          color="gradient"
          sx={{ textTransform: 'uppercase' }}
          mb={5.5}
        >
          <div>{t('cooperation', 'Сотрудничество')}</div>
        </Typography>
        <CooperationBlock data={cooperation} />
      </Section>
    </BaseLayout>
  );
};
