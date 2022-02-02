import { ComponentType } from 'react';
import clsx from 'clsx';
import { map } from 'lodash';
import useStyles from './styles';
import { IconClose, IconFile } from '../../icons';
import { FormHelperText, SvgIcon, Typography } from '@mui/material';

interface InputFileUploaderProps {
  files: any;
  label?: string;
  onChangeFiles: any;
  onResetFiles: any;
  error: boolean;
  helperText?: string;
}
export const InputFileUploader: ComponentType<InputFileUploaderProps> = ({
  files,
  onChangeFiles,
  onResetFiles,
  error,
  helperText,
  label,
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, {
        [classes.error]: error,
      })}
    >
      <Typography className={classes.fileUploader} variant="body2" component="div">
        {files ? (
          <div className={classes.fileList}>
            {map(files, (file: File, idx: number) => (
              <div className={classes.fileListItem} key={idx}>
                <span className={classes.fileName}>{file && file.name}</span>
                <SvgIcon
                  component={IconClose}
                  viewBox="0 0 24 24"
                  onClick={onResetFiles}
                  className={classes.fileDeleteIcon}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <SvgIcon
              component={IconFile}
              viewBox="0 0 24 24"
              className={classes.fileUploaderIcon}
            />
            <span>{label}</span>
            <input
              defaultValue={files}
              onChange={onChangeFiles}
              className={classes.inputFile}
              type="file"
            />
          </>
        )}
      </Typography>
      {error && <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>}
    </div>
  );
};
