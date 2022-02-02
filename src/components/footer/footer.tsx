import { Box, Container, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import clsx from 'clsx';
import { format } from 'date-fns';
import { map } from 'lodash';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ComponentType } from 'react';
import { useThemeChange } from '../../common/theme/useThemeChange';
import { ActivitiesMenu } from '../../constants/menu/activities-menu.constant';
import { MenuItemsInterface } from '../../constants/menu/menu-items-interface.constants';
import { ServicesMenu } from '../../constants/menu/services-menu.constant';
import { SocialNetworksMenu } from '../../constants/menu/social-networks-menu.constant';
import { ROUTES } from '../../constants/routes.constants';
import { useContacts, useResponsive } from '../../hooks';
import { Logo } from '../logo';
import useStyles from './styles';

interface FooterProps {
  className?: string;
}

interface MenuOptionsProps {
  className?: string;
  target?: string;
  text?: boolean;
  direction?: 'column' | 'row';
  spacing?: number | undefined;
}

const menuOptions: MenuOptionsProps = {
  target: '_self',
  text: true,
  direction: 'column',
  spacing: 2,
};

export const Footer: ComponentType<FooterProps> = ({ className }) => {
  const { theme } = useThemeChange();
  const a11yMode = theme === 'a11y';
  const classes = useStyles({ a11yMode });
  const r = useResponsive();
  const { t } = useTranslation();
  const { contacts } = useContacts();

  const menu = (menu: MenuItemsInterface[], options: MenuOptionsProps = menuOptions) => {
    const items = map(menu, ({ label, labelKey, path, icon }, idx) => (
      <Link href={path} key={idx}>
        <a target={options.target} className={classes.link}>
          {icon && (
            <SvgIcon className={classes.icon} component={icon} mr={0.5} viewBox="0 0 24 24" />
          )}
          {options.text && t(labelKey, label)}
        </a>
      </Link>
    ));

    return (
      <Stack
        className={classes.nav}
        direction={options.direction}
        spacing={options.spacing}
        component="nav"
        role="navigation"
      >
        {items}
      </Stack>
    );
  };

  return (
    <Box
      className={clsx(classes.root, className)}
      color="primary.contr"
      component="footer"
      pt={30}
      pb={13}
      mt={-15}
    >
      <Container>
        <Grid container justifyContent="space-between" columnSpacing={3.75}>
          <Grid
            item
            xs={12}
            md
            lg={3}
            container
            direction={r({ xs: 'row', md: 'column' })}
            columnSpacing={r({ xs: 2, md: 0 })}
            justifyContent={r({ xs: 'space-between', md: 'flex-start' })}
            alignItems={r({ xs: 'center', md: 'flex-start' })}
            pb={r({ xs: 5, md: 0 })}
          >
            {r({ md: true }) && (
              <Grid item pb={3.25}>
                <Logo variant="inherit" className={classes.logo} />
              </Grid>
            )}

            <Grid item xs="auto">
              <Typography variant="body3" className={classes.copy}>
                &copy; {format(new Date(), 'Y')} derc.uz <br />
                {t('footer.copyrights', 'Все права защищены.')}
              </Typography>
            </Grid>
            {r({ xs: true, lg: false }) && (
              <Grid item xs="auto" mt={r({ md: 'auto' })}>
                {menu(SocialNetworksMenu, {
                  target: '_blank',
                  direction: 'row',
                  text: false,
                  spacing: 3.75,
                })}
              </Grid>
            )}
          </Grid>
          <Grid item xs={6} md lg={3}>
            <Typography className={classes.title} variant="body2" component="b" mb={2}>
              {t('about', 'О центре')}
            </Typography>
            {menu(ActivitiesMenu)}
          </Grid>
          <Grid item xs={6} md lg={3} container direction="column" spacing="2">
            <Grid item>
              <Typography className={classes.title} variant="body2" component="b" mb={2}>
                {t('services', 'Услуги')}
              </Typography>
              {menu(ServicesMenu)}
            </Grid>
            <Grid item mt="auto" lg="auto">
              <Typography variant="body2" fontWeight="500" mb={1.5} component="div">
                <a
                  className={classes.link}
                  href={`tel:${contacts.phone.value.replace(/-|\s/g, '')}`}
                >
                  {contacts.phone.value}
                </a>
              </Typography>
              <Typography variant="body2" fontWeight="500" mb={1.5} component="div">
                <a className={classes.link} href={`mailto:${contacts.email.value}`}>
                  {contacts.email.value}
                </a>
              </Typography>
              <Typography variant="body2" fontWeight="500" component="div">
                <Link href={ROUTES.CONTACTS.ROOT}>
                  <a className={classes.link}>{t('contacts.us', 'Связаться нами')}</a>
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {r({ lg: true }) && (
            <Grid lg={3} ml="auto" item>
              {menu(SocialNetworksMenu)}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
