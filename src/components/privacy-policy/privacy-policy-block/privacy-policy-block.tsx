import { ComponentType } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { ROUTES } from '../../../constants/routes.constants';
import { useTranslation } from 'next-i18next';

export const PrivacyPolicyBlock: ComponentType = () => {
  const { t } = useTranslation();

  return (
    <Typography
      variant="body2"
      component="div"
      color="primary.dark"
      sx={{ textDecoration: 'none' }}
    >
      {t('privacy.policy.agreement.1', 'Нажимая кнопку "Отправить" вы автоматически')}
      <br /> {t('privacy.policy.agreement.2', 'соглашаетесь с')}{' '}
      <Link href={ROUTES.PRIVACY_POLICY.ROOT}>
        <a style={{ textDecoration: 'none' }}>
          <Typography variant="body2" component="span" color="primary.main">
            {t('privacy.policy.agreement.3', 'политикой конфиденциальности')}
          </Typography>
        </a>
      </Link>
    </Typography>
  );
};
