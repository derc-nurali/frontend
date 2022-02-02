import { ComponentType } from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Stack, Typography } from '@mui/material';
import useStyles from './styles';

interface AboutTargetAudienceProps {}

export const AboutTargetAudience: ComponentType<AboutTargetAudienceProps> = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Stack spacing={3.75} direction="row">
      <Box className={classes.item}>
        <Typography className={classes.title} variant="body2" color="primary">
          {t(
            'target.1.1',
            'Если вы сотрудник госорганов, и в вашу работу входит внедрение цифровых технологий в деятельность вашей организации'
          )}
        </Typography>
        <Box className={classes.media} component="figure" m={'40px 0 16px -40px'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={classes.img}
            src="/images/about-target-audience-01.svg"
            width="256"
            height="235"
            alt=""
          />
        </Box>
        <Typography className={classes.text} variant="body2" color="primary.dark">
          {t(
            'target.1.2',
            'на этом сайте вы можете узнать о путях решения проблем, возникающих в деятельности госуорганов и секторов экономики при цифровой трансформации.'
          )}
        </Typography>
      </Box>

      <Box className={classes.item}>
        <Box className={classes.media} component="figure" m={'-20px 0 20px -30px'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={classes.img}
            src="/images/about-target-audience-02.svg"
            width="263"
            height="237"
            alt=""
          />
        </Box>
        <Typography className={classes.title} variant="body2" color="primary">
          {t(
            'target.2.1',
            'Если вы журналист или блогер и ваша тематика новинки в области цифровых исследований и достижений'
          )}
        </Typography>
        <Typography className={classes.text} variant="body2" color="primary.dark">
          {t(
            'target.2.2',
            'здесь вы можете найти информацию о последних исследованиях по этой тематике в Узбекистане.'
          )}
        </Typography>
        <Box className={classes.quote} component="blockquote" m="30px 0 0">
          <Typography variant="body1" color="primary.dark">
            {t('target.2.3', 'Без цифровой экономики нет будущего у экономики страны')}
          </Typography>
          <Typography className={classes.cite} variant="body3" component="cite" fontStyle="normal">
            {t('target.2.4', 'Ш.Мирзиёев')}
          </Typography>
        </Box>
      </Box>

      <Box className={classes.item}>
        <Typography className={classes.title} variant="body2" color="primary">
          {t(
            'target.3.1',
            'Если вы студент и изучаете сферу цифровой экономики и электронного правительства'
          )}
        </Typography>
        <Typography className={classes.text} variant="body2" color="primary.dark">
          {t(
            'target.3.2',
            'у нас вы можете скачать последние научные исследования на эту тему для использования в своих работах.'
          )}
        </Typography>
        <Box className={classes.media} component="figure" m={'30px 0 0 -10px'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={classes.img}
            src="/images/about-target-audience-03.svg"
            width="250"
            height="296"
            alt=""
          />
        </Box>
      </Box>

      <Box className={classes.item}>
        <Typography className={classes.title} variant="body2" color="primary">
          {t(
            'target.4.1',
            'Если вы в целом человек интересующийся развитием страны в области ИКТ и хотите из первых рук получать актуальную проверенную информацию'
          )}
        </Typography>
        <Box className={classes.media} component="figure" m={'40px -17px 30px 0'}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={classes.img}
            src="/images/about-target-audience-04.svg"
            width="267"
            height="187"
            alt=""
          />
        </Box>
        <Typography className={classes.text} variant="body2" color="primary.dark">
          {t(
            'target.4.2',
            'здесь вы можете найти данные о национальных и международных рейтингах в области цифровой экономики и электронного правительства.'
          )}
        </Typography>
      </Box>
    </Stack>
  );
};
