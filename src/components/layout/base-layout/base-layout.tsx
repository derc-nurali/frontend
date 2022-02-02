import { Container, Drawer, IconButton, SvgIcon } from '@mui/material';
import { Box } from '@mui/system';
import { isFunction } from 'lodash';
import React, { ComponentType } from 'react';
import { Footer } from '../../footer';
import { IconClose } from '../../icons';
import { ResourcesLinks } from '../../resources-links';
import { Section } from '../../section';
import { useLayout } from '../useLayout';
import useStyles from './styles';
import { ContactsFloatingNetworks } from '../../contacts';

export const BaseLayout: ComponentType = ({ children }) => {
  const classes = useStyles();
  const { layoutDrawer, closeLayoutDrawer } = useLayout();

  return (
    <>
      <Box className={classes.root} sx={{ boxShadow: 1 }}>
        {children}
        <Section
          variant="rounded"
          sx={{
            color: 'primary.dark',
            mt: -15,
            pt: 30,
            background: 'none',
            bgcolor: 'rinatBlue.light',
            zIndex: 4,
          }}
        >
          <ResourcesLinks />
        </Section>
        <Footer className={classes.footer} />
      </Box>
      <ContactsFloatingNetworks />
      <Drawer
        anchor={layoutDrawer.anchor}
        open={layoutDrawer.open}
        classes={{
          root: classes.drawerRoot,
          paper: classes.drawerPaper,
          modal: classes.drawerModal,
        }}
        onClose={closeLayoutDrawer}
        //onKeyDown={closeLayoutDrawer}
        disableEscapeKeyDown={false}
      >
        <IconButton
          className={classes.close}
          color="primary"
          onClick={closeLayoutDrawer}
          sx={{
            position: 'absolute',
            top: { lg: 32, xs: 22 },
            right: { lg: 32, xs: 22 },
          }}
        >
          <SvgIcon component={IconClose} viewBox="0 0 24 24" />
        </IconButton>
        <Container>{isFunction(layoutDrawer?.render) ? layoutDrawer?.render() : null}</Container>
      </Drawer>
    </>
  );
};
