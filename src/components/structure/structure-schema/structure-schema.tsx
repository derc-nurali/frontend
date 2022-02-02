import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { map } from 'lodash';
import { useTranslation } from 'next-i18next';
import { ComponentType } from 'react';
import { useResponsive } from '../../../hooks';
import useStyles from './styles';

export interface StructureItemInterface {
  label: string;
  labelKey: string;
  child?: StructureItemInterface[];
  grid?: any;
}

export const STRUCTURE_SCHEMA: StructureItemInterface[] = [
  {
    label: 'Директор',
    labelKey: 'structure.director',
    grid: {
      size: 80,
      classes: ['__right', '__left', '__reverse'],
    },
    child: [
      {
        label: 'Заместитель директора',
        labelKey: 'structure.deputyDirector ',
        grid: {
          classes: ['__right'],
          size: 80,
          column: '1 / 4',
          row: '1 / span 12',
        },
        child: [
          {
            label: 'Научно-исследовательский отдел развития цифровой экономики',
            labelKey: 'structure.research',
            grid: {
              classes: ['__center'],
              size: 140,
            },
          },
          {
            label: 'Департамент долгосрочных перспектив цифрового развития',
            labelKey: 'structure.longTermProspects',
            grid: {
              classes: ['__center'],
              size: 140,
            },
          },
        ],
      },
      {
        label: 'Аналитика эффективности внедрения цифровых технологий в экономику',
        labelKey: 'structure.performanceInEconomy',
        grid: {
          classes: ['__center'],
          size: '100%',
          column: '4 / 7',
          row: '1  / span 5',
        },
      },
      {
        label: 'Аналитика эффективности внедрения цифровых технологий в государственное управление',
        labelKey: 'structure.performanceInPublicAdministration',
        grid: {
          classes: ['__left'],
          size: '100%',
          column: '4 / 7',
          row: '6 / span 5',
        },
      },
      {
        label: 'Департамент международных отношений',
        labelKey: 'structure.DIR',
        grid: {
          classes: ['__left'],
          size: 80,
          column: '7 / -1',
          row: '1 / span 3',
        },
      },
      {
        label: 'Бухгалтерия',
        labelKey: 'structure.accounting',
        grid: {
          classes: ['__left'],
          size: 80,
          column: '7 / -1',
          row: '4 / span 3',
        },
      },
      {
        label: 'Офис',
        labelKey: 'structure.office',
        grid: {
          classes: ['__left'],
          size: 80,
          column: '7 / -1',
          row: '7 / span 3',
        },
      },
      {
        label: 'Юридический отдел',
        labelKey: 'structure.legalDcepartment',
        grid: {
          classes: ['__left'],
          size: 80,
          column: '7 / -1',
          row: '10 / span 3',
        },
      },
    ],
  },
];

export const StructureSchema: ComponentType = () => {
  const { t } = useTranslation();
  const r = useResponsive();
  const classes = useStyles();

  const mapClasses = (classNames: any) =>
    map(classNames, (item) => {
      return classes[item] || '';
    });

  const structure = (items: StructureItemInterface[]) => {
    // if (isEmpty(items)) return null;
    const subitems = map(items, (subitem: StructureItemInterface, idx: number) => {
      const count = items.length;
      return (
        <Box
          className={clsx(classes.item, { [classes.__parent]: subitem.child?.length })}
          component="li"
          key={`key_${subitem.labelKey}_${idx}`}
          sx={{
            gridRow: subitem.grid?.row,
            gridColumn: subitem.grid?.column,
          }}
        >
          <Box
            component="div"
            className={clsx(
              classes.box,
              classes.branch,
              r({
                lg: mapClasses(subitem.grid?.classes),
                xs: classes['__left'],
              })
            )}
            sx={{
              minHeight: { lg: subitem.grid?.size, xs: 80 },
            }}
          >
            <Typography variant="body1" component="div">
              {t(subitem.labelKey, subitem.label)}
            </Typography>
          </Box>
          {subitem.child && structure(subitem.child)}
        </Box>
      );
    });
    return (
      <Box
        className={clsx(classes.list, classes.__child)}
        component="ul"
        sx={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {subitems}
      </Box>
    );
  };

  return (
    <>
      <Box>
        {map(STRUCTURE_SCHEMA, (item: StructureItemInterface, idx: number) => {
          const count = item.child?.length;
          if (item.child) structure(item.child);
          return (
            <Box
              className={clsx(classes.list, classes.__parent)}
              component="ul"
              sx={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                flex: 0,
              }}
            >
              <Box
                className={clsx(classes.item, { [classes.__parent]: item.child?.length })}
                component="li"
                key={`key_${item.labelKey}_${idx}`}
              >
                <Box
                  component="div"
                  className={clsx(classes.box, classes.branch, mapClasses(item.grid?.classes))}
                  sx={{
                    m: '0 auto',
                    maxWidth: { lg: `calc((100% - 160px) / 3)` },
                  }}
                >
                  <Typography variant="body1" component="div">
                    {t(item.labelKey, item.label)}
                  </Typography>
                </Box>
                {item.child && structure(item.child)}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
