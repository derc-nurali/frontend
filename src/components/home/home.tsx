import { Box, IconButton, SvgIcon, Typography } from '@mui/material';
import clsx from 'clsx';
import { forEach } from 'lodash';
import { useTranslation } from 'next-i18next';
import React, { ComponentType } from 'react';
import { useThemeChange } from '../../common/theme/useThemeChange';
import { ROUTES } from '../../constants/routes.constants';
import { useResponsive } from '../../hooks';
import { AboutBranches, AboutBranchProps } from '../about';
import { AboutTargetAudience } from '../about/about-target-audience';
import { AchievementsList } from '../achievements';
import { ActivitiesList } from '../activities';
import { Header } from '../header';
import { IconArrowLarge } from '../icons';
import { BaseLayout } from '../layout';
import { PostsSlider } from '../posts';
import { Section } from '../section';
import { SubHeader } from '../sub-header';
import useStyles from './styles';

interface HomeProps {
  data: Record<string, any>;
}

export const Home: ComponentType<HomeProps> = ({ data }) => {
  const { t } = useTranslation();
  const { activities, achievements, posts, ...abouts } = data;
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';

  const classes = useStyles({ a11yMode });
  const r = useResponsive();

  const aboutBranches: AboutBranchProps[] = [];
  forEach(abouts, (page, key) => {
    const item = {
      id: page.id,
      slug: key,
      title: page.title,
      description: page.shortDescription,
      path: ROUTES.ABOUT.ROOT,
    };
    aboutBranches.push(item);
  });

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
        <SubHeader
          title={t('welcome.title', 'Digital Economy Research Center')}
          text={t(
            'welcome.text',
            'Основным направлением центра является оценка влияния процессов цифровизации на производство и отрасли экономики'
          )}
        />
      </Section>

      <Section
        className={classes.activities}
        variant="rounded"
        sx={{
          color: 'primary.contrastText',
          mt: -15,
          pt: 30,
          bgcolor: 'primary.dark',
          zIndex: 9,
        }}
      >
        <Typography className={classes.title} variant="h3" component="b">
          {t('activities', 'Деятельность')}
        </Typography>
        <Box className={classes.list}>
          <ActivitiesList
            data={activities?.hits}
            columnSpacing={r({ xs: 4, xxl: 10 })}
            flexWrap="nowrap"
            itemProps={{ xs: 'auto' }}
          />
        </Box>
      </Section>

      <Section
        variant="rounded"
        sx={{
          mt: -15,
          pt: 30,
          bgcolor: 'rinatBlue.light',
          backgroundPosition: '0 calc(100% - 46px)',
          zIndex: 8,
        }}
      >
        <Box className={classes.list}>
          <AboutTargetAudience />
        </Box>
      </Section>

      <Section
        variant="rounded"
        sx={{
          mt: -15,
          pt: 30,
          backgroundImage: 'none',
          zIndex: 7,
        }}
      >
        <AboutBranches data={aboutBranches} />
      </Section>

      <Section
        className={classes.achievements}
        variant="rounded"
        sx={{
          color: 'primary.contrastText',
          mt: -15,
          pt: 30,
          bgcolor: 'primary.dark',
          zIndex: 6,
        }}
      >
        <Typography className={classes.title} variant="h3" component="b">
          {t('achievements', 'Достижения')}
        </Typography>
        <Box className={classes.list}>
          <AchievementsList
            data={achievements?.hits}
            columnSpacing={r({ xs: 4, xxl: 5 })}
            flexWrap="nowrap"
            itemProps={{ xs: 'auto' }}
          />
        </Box>
      </Section>

      <Section
        className={classes.news}
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 30,
          bgcolor: 'background.paper',
          backgroundImage: 'none',
          zIndex: 5,
        }}
      >
        <Box className={classes.header} mb={r({ xs: 8.5, lg: 5 })}>
          <Typography className={classes.title} variant="h3" component="b" mb={0}>
            {t('news', 'Новости')}
          </Typography>
          <Box className={classes.actions} ml={'auto'}>
            <IconButton
              className={clsx(classes.btn, 'news-slider-prev')}
              sx={{
                mr: 3.75,
              }}
              color="primary"
            >
              <SvgIcon className={classes.icon} component={IconArrowLarge} viewBox="0 0 32 32" />
            </IconButton>
            <IconButton className={clsx(classes.btn, 'news-slider-next')} color="primary">
              <SvgIcon
                className={clsx(classes.icon, classes.__right)}
                component={IconArrowLarge}
                viewBox="0 0 32 32"
              />
            </IconButton>
          </Box>
        </Box>
        <Box className={classes.list}>
          <PostsSlider data={posts?.hits} spaceBetween={30} />
        </Box>
      </Section>
    </BaseLayout>
  );
};
