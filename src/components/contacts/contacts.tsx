import React, { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { BaseLayout } from '../layout';
import { Section } from '../section';
import { Header } from '../header';
import { SubHeader } from '../sub-header';
import { DataGrid } from '../data-grid';
import { ContactsFrom } from './contacts-form';
import { ContactItemProps, useContacts } from '../../hooks';
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import { Placemark, YMaps, Map, MapState } from 'react-yandex-maps';
import { SITE_MAP_LAT, SITE_MAP_LNG } from '../../constants/contacts.constants';
import useStyles from './styles';

export const Contacts: ComponentType = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { contactsItems } = useContacts();

  const mapDefaultState: MapState = {
    center: [SITE_MAP_LAT, SITE_MAP_LNG],
    zoom: 14,
  };

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
        <SubHeader title={t('contacts.us', 'Связаться с нами')} />
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
        <Box className={clsx(classes.root)}>
          <Typography
            variant="h4"
            component="h4"
            color="primary.main"
            mb={4}
            sx={{ textTransform: 'uppercase' }}
          >
            {t('contacts', 'Контакты')}
          </Typography>
          <DataGrid
            data={contactsItems}
            spacing={3}
            itemProps={{ xs: 12, sm: 6, lg: 4 }}
            renderItem={(item: ContactItemProps) => (
              <>
                <Typography
                  variant="caption"
                  component="div"
                  mb={0.5}
                  sx={{ color: 'rgba(183, 197, 200, 1)', textTransform: 'uppercase' }}
                >
                  {t(item.labelKey, item.label)}
                </Typography>
                <Typography variant="body2" component="div" sx={{ fontWeight: 600 }}>
                  {item.value}
                </Typography>
              </>
            )}
          />
        </Box>
        <Box className={clsx(classes.map)}>
          <YMaps>
            <Map defaultState={mapDefaultState} width="100%" height={300}>
              <Placemark geometry={mapDefaultState.center} />
            </Map>
          </YMaps>
        </Box>
        <ContactsFrom />
      </Section>
    </BaseLayout>
  );
};
