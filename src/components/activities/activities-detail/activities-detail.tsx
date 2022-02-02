import React, { ComponentType } from 'react';
import { get, isEmpty, map } from 'lodash';
import { BaseLayout } from '../../layout';
import { Section } from '../../section';
import { Header } from '../../header';
import { SubHeader } from '../../sub-header';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ActivitiesDetailProps {
  data: Record<string, any>;
}

export const ActivitiesDetail: ComponentType<ActivitiesDetailProps> = ({ data }) => {
  const { title, description, steps } = data;
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
          mb={!isEmpty(steps) ? 4 : 0}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {!isEmpty(steps) && (
          <ul>
            {map(steps, (step, idx) => (
              <Typography variant="body2" component="li" mb={2} key={idx}>
                {step}
              </Typography>
            ))}
          </ul>
        )}
      </Section>
    </BaseLayout>
  );
};
