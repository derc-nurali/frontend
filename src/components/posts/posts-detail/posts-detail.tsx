import { Box, Grid, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { ComponentType } from 'react';
import { useThemeChange } from '../../../common/theme/useThemeChange';
import { CATEGORY_NEWS } from '../../../constants/posts-categories.constants';
import { usePosts, useResponsive } from '../../../hooks';
import { DataGrid } from '../../data-grid';
import { Header } from '../../header';
import { BaseLayout } from '../../layout/base-layout';
import { PageTitle } from '../../page-title';
import { Section } from '../../section';
import { SubHeader } from '../../sub-header';
import { PostsCard, PostVariants } from '../posts-card';

interface PostsDetailProps {
  data: Record<string, any>;
  variant?: PostVariants;
}

export const PostsDetail: ComponentType<PostsDetailProps> = ({ data, variant = 'news' }) => {
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';
  const { t, i18n } = useTranslation();
  const r = useResponsive();
  const { isLoading, posts } = usePosts({
    defaultParams: { take: 4, categories: CATEGORY_NEWS, embed: 'cover,categories' },
  });

  const { title, categories, shortDescription, description, createdAt, updatedAt } = data;
  const cover = get(data, ['cover', 'thumbnails', 'large', 'url'], '');
  const date = updatedAt || createdAt;
  const category = get(categories, [0, 'title', i18n.language]);
  const spacing = r({ lg: '60px' });

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
        <SubHeader title={t(variant, 'Посты')} />
      </Section>

      <Section
        variant="rounded"
        sx={{
          color: 'primary.dark',
          mt: -15,
          pt: 30,
          backgroundImage: 'none',
          bgcolor: 'rinatGrey.light',
          zIndex: 9,
        }}
      >
        <Grid container spacing={spacing}>
          <Grid
            item
            sx={{
              flex: `0 0 calc(100% - 270px - ${spacing})`,
              maxWidth: `calc(100% - 270px - ${spacing})`,
            }}
          >
            <PageTitle
              title={title}
              sx={{
                textTransform: 'uppercase',
              }}
            />

            <Stack direction="row" spacing={3.75} mb={5}>
              {category && (
                <Typography
                  py={0.25}
                  px={0.625}
                  variant="caption"
                  component="b"
                  color="primary.contrastText"
                  bgcolor="primary.light"
                  sx={{
                    display: 'inline-block',
                    borderTopLeftRadius: 8,
                    lineHeight: '1.5',
                    fontSize: 10,
                    textTransform: 'uppercase',
                    opacity: a11yMode ? 1 : 0.5,
                  }}
                >
                  {category}
                </Typography>
              )}
              {date && (
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ mb: 1.5, opacity: a11yMode ? 1 : 0.5 }}
                >
                  {date && format(new Date(date), 'dd.mm.yyyy')}
                </Typography>
              )}
            </Stack>

            {cover && (
              <Box
                component="figure"
                sx={{
                  m: 0,
                  mb: 4.5,
                  borderBottomLeftRadius: 60,
                  overflow: 'hidden',
                }}
              >
                <Image src={cover} alt={title} layout="responsive" width={840} height={580} />
              </Box>
            )}
            {shortDescription && (
              <Typography variant="subtitle2" component="p" mb={3}>
                {shortDescription}
              </Typography>
            )}
            <Typography
              variant="body2"
              fontWeight="500"
              component="div"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Grid>
          <Grid
            item
            sx={{
              flex: `0 0 calc(270px + ${spacing})`,
              maxWidth: `calc(270px+${spacing})`,
            }}
          >
            <Typography
              variant="h4"
              component="b"
              sx={{
                display: 'block',
                color: 'primary.main',
                mb: 3.75,
                textTransform: 'uppercase',
              }}
            >
              {t('news.other', 'Другие новости')}
            </Typography>

            <DataGrid
              data={posts}
              isLoading={isLoading}
              flexDirection={r({ xs: 'column', md: 'row', lg: 'column' })}
              spacing={5}
              itemProps={{
                md: 6,
                lg: 12,
              }}
              renderItem={(item) => <PostsCard item={item} />}
            />
          </Grid>
        </Grid>
      </Section>
    </BaseLayout>
  );
};
