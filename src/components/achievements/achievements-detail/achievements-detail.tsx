import React, { ComponentType } from 'react';
import Image from 'next/image';
import { BaseLayout } from '../../layout';
import { get } from 'lodash';
import { Section } from '../../section';
import { Header } from '../../header';
import { SubHeader } from '../../sub-header';
import { Box, Typography } from '@mui/material';

interface AchievementsDetailProps {
  data: Record<string, any>;
}

export const AchievementsDetail: ComponentType<AchievementsDetailProps> = ({ data }) => {
  const { title, description } = data;
  const cover = get(data, ['cover', 'thumbnails', 'large', 'url'], '');

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
          backgroundImage: 'none',
          bgcolor: 'rinatGrey.light',
          zIndex: 9,
        }}
      >
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

        <Typography
          variant="body2"
          component="div"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Section>
    </BaseLayout>
  );
};
