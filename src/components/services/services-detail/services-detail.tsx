import React, { ComponentType } from 'react';
import { BaseLayout } from '../../layout/base-layout';
import { Section } from '../../section';
import { Header } from '../../header';
import { SubHeader } from '../../sub-header';
import { Typography } from '@mui/material';

interface ServicesDetailProps {
  data: Record<string, any>;
}

export const ServicesDetail: ComponentType<ServicesDetailProps> = ({ data }) => {
  const { title, description } = data;

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
          pt: 30,
          backgroundImage: 'none',
          bgcolor: 'rinatGrey.light',
          zIndex: 9,
        }}
      >
        <Typography
          variant="body2"
          fontWeight="500"
          component="div"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Section>
    </BaseLayout>
  );
};
