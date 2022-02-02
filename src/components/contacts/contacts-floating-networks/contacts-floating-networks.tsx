import { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { map } from 'lodash';
import { Box, IconButton, SvgIcon } from '@mui/material';
import { SocialNetworksMenu } from '../../../constants/menu/social-networks-menu.constant';
import useStyles from './styles';
import clsx from 'clsx';

interface ContactsFloatingNetworksProps {
  className?: string;
}

export const ContactsFloatingNetworks: ComponentType<ContactsFloatingNetworksProps> = ({
  className,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const networks = map(SocialNetworksMenu, ({ label, labelKey, path, icon }, idx) => (
    <IconButton
      className={classes.btn}
      href={path}
      target="_blank"
      rel="noreferrer"
      title={t(labelKey, label)}
      key={idx}
    >
      {icon && <SvgIcon component={icon} viewBox="0 0 24 24" />}
    </IconButton>
  ));

  return <Box className={clsx(className, classes.root)}>{networks}</Box>;
};
