import { ComponentType } from 'react';
import InputMask from 'react-input-mask';
import clsx from 'clsx';
import {
  Button,
  Typography,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { InputFileUploader } from '../../inputs';
import { useVacancyApplyForm } from './useVacancyApplyForm';
import { PrivacyPolicyBlock } from '../../privacy-policy';
import {
  FIELD_DESCRIPTION,
  FIELD_EMAIL,
  FIELD_FULL_NAME,
  FIELD_PHONE,
  FIELD_RESUME,
} from './vacancies-apply-from-schema';
import useStyles from './styles';

interface VacanciesApplyFormProps {
  className?: string;
  vacancyId: number;
}

export const VacanciesApplyForm: ComponentType<VacanciesApplyFormProps> = ({
  className,
  vacancyId,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    formik,
    submitModal,
    setSubmitModal,
    files,
    handleFieldChange,
    handleSelectFiles,
    handleResetFiles,
    hasError,
    getErrorMessage,
  } = useVacancyApplyForm(vacancyId);

  const onClose = () => setSubmitModal((prev) => !prev);

  return (
    <div className={clsx(className, classes.root)}>
      <Typography className={classes.title} variant="h4" color="primary.main" mb={3.75}>
        {t('applyForJob', 'Откликнуться на вакансию')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3.75} mb={3}>
          <Grid item xs={12}>
            <TextField
              {...formik.getFieldProps(FIELD_FULL_NAME)}
              onChange={handleFieldChange(FIELD_FULL_NAME)}
              error={hasError(FIELD_FULL_NAME)}
              helperText={getErrorMessage(FIELD_FULL_NAME)}
              variant="standard"
              label={t('fullName', 'Фамилия, имя и отчество')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...formik.getFieldProps(FIELD_EMAIL)}
              onChange={handleFieldChange(FIELD_EMAIL)}
              error={hasError(FIELD_EMAIL)}
              helperText={getErrorMessage(FIELD_EMAIL)}
              variant="standard"
              label={t('email', 'Электронная почта')}
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputMask
              mask={'+\\9\\98 99 999 99 99'}
              {...formik.getFieldProps(FIELD_PHONE)}
              onChange={handleFieldChange(FIELD_PHONE)}
            >
              {(props: any) => (
                <TextField
                  {...props}
                  variant="standard"
                  name={'phoneNumber'}
                  label={t('phoneNumber', 'Номер телефона')}
                  error={hasError(FIELD_EMAIL)}
                  helperText={getErrorMessage(FIELD_EMAIL)}
                  fullWidth
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...formik.getFieldProps(FIELD_DESCRIPTION)}
              onChange={handleFieldChange(FIELD_DESCRIPTION)}
              error={hasError(FIELD_DESCRIPTION)}
              helperText={getErrorMessage(FIELD_DESCRIPTION)}
              variant="standard"
              label={t('tellAboutYourself', 'Расскажите коротко о себе')}
              rows={4}
              multiline
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" spacing={3}>
          <Grid item xs={12} sm={5} md={3}>
            <InputFileUploader
              files={files}
              onChangeFiles={handleSelectFiles}
              onResetFiles={handleResetFiles}
              label={t('action.attach', 'Прикрепить файл')}
              error={hasError(FIELD_RESUME)}
              helperText={getErrorMessage(FIELD_RESUME)}
            />
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <PrivacyPolicyBlock />
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button type="submit" fullWidth>
              {t('action.send')}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Dialog open={submitModal} onClose={onClose}>
        <DialogTitle>{t('thanks-submit', 'Спасибо за отклик!')}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mt: 2 }}>
            {t(
              'contacts.vacancy.soon',
              'Мы свяжемся с Вами в течение недели, если Ваш опыт отвечает требованиям вакансии. В другом случае, будем рады сохранить информацию и держать Вас в курсе актуальных вакансий в будущем.'
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{t('ok', 'Ок понятно')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
