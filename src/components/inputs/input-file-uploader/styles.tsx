import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const options = {
  name: 'input-file-uploader',
};
const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {},
    error: {
      '& $fileUploader': {
        borderColor: theme.palette.error.main,
      },
      '& $helperText': {
        color: theme.palette.error.main,
      },
    },
    fileUploader: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      padding: theme.spacing(1.25, 0),
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
    fileUploaderIcon: {
      fontSize: 16,
      marginRight: theme.spacing(1),
    },
    inputFile: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      opacity: 0,
      zIndex: 2,
      appearance: 'none',
      cursor: 'pointer',
    },
    fileList: {},
    fileListItem: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: theme.spacing(1.25, 0),
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
    fileIcon: {
      fontSize: 'inherit',
      marginRight: theme.spacing(0.625),
      marginTop: 4,
    },
    fileName: {},
    fileDeleteIcon: {
      marginLeft: theme.spacing(1),
      fontSize: 12,
      cursor: 'pointer',
      color: theme.palette.error.main,
    },
    helperText: {},
  }),
  options
);

export default useStyles;
