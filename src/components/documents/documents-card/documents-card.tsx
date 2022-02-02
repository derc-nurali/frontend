import { Box, SvgIcon, Typography } from '@mui/material';
import clsx from 'clsx';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { ComponentType } from 'react';
import { IconRedirect } from '../../icons';
import useStyles from './styles';

interface DocumentsCardProps {
  className?: string;
  item: Record<string, any>;
}

export const DocumentsCard: ComponentType<DocumentsCardProps> = ({ className, item }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { lexItems, title } = item;
  const lexId = get(lexItems, [0, 'id']);
  const url = 'https://lex.uz/docs/' + lexId;

  return (
    <Link href={url} passHref>
      <Box component="a" className={clsx(classes.root, className)} title={title} target="_blank">
        <Typography
          className={classes.text}
          variant="body1"
          fontWeight="bold"
          component="div"
          mb={2.5}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="b"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          {t('read.on', 'Читать на lex.uz', { resource: 'lex.uz' })}
          <SvgIcon component={IconRedirect} />
        </Typography>
      </Box>
    </Link>
  );
};
