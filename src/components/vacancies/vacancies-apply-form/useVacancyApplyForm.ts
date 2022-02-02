import { useTranslation } from 'next-i18next';
import { FormikValues, useFormik } from 'formik';
import { get, forEach } from 'lodash';
import { useState } from 'react';
import { ApiVacancies } from '../../../http';
import {
  FIELD_FULL_NAME,
  FIELD_EMAIL,
  FIELD_PHONE,
  FIELD_DESCRIPTION,
  FIELD_RESUME,
  vacanciesApplyFromSchema,
} from './vacancies-apply-from-schema';

export const useVacancyApplyForm = (vacancyId: string | number) => {
  const { t } = useTranslation();
  const [submitModal, setSubmitModal] = useState<boolean>(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = (values: FormikValues) => {
    const formData = new FormData();
    formData.append('vacancyId', String(vacancyId));
    forEach(values, (value, field) => {
      if (field === FIELD_PHONE) {
        formData.append(field, value.replace(/\s+/g, ''));
      } else {
        formData.append(field, value);
      }
    });

    ApiVacancies.postVacancy(formData).then(() => {
      setFiles(null);
      setSubmitModal((prev) => !prev);
      formik.resetForm();
    });
  };

  const handleFieldChange = (field: string) => (e: any) => {
    formik.setFieldValue(field, e.target.value);
    formik.setFieldError(field, null);
  };

  const handleFileChange = (field: string) => (file: any) => {
    formik.setFieldValue(field, file);
    formik.setFieldError(field, null);
  };

  const handleSelectFiles = (event: any) => {
    setFiles(event.currentTarget.files);
    handleFileChange(FIELD_RESUME)(event.currentTarget.files[0]);
  };

  const handleResetFiles = () => {
    setFiles(null);
    handleFileChange(FIELD_RESUME)(null);
  };

  const hasError = (field: string) => {
    return (
      get(formik, ['touched', ...field.split('.')], false) &&
      Boolean(get(formik, ['errors', ...field.split('.')], false))
    );
  };

  const getErrorMessage = (field: string) => {
    if (!hasError(field)) return ' ';
    const key = get(formik, ['errors', ...field.split('.')], 'error');
    if (key.includes('error.')) {
      return t(key, 'Ошибка');
    }
    return key;
  };

  const formik: any = useFormik({
    initialValues: {
      [FIELD_FULL_NAME]: '',
      [FIELD_EMAIL]: '',
      [FIELD_PHONE]: '',
      [FIELD_DESCRIPTION]: '',
      [FIELD_RESUME]: '',
    },
    validationSchema: vacanciesApplyFromSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  return {
    formik,
    submitModal,
    setSubmitModal,
    files,
    handleFieldChange,
    handleSelectFiles,
    handleResetFiles,
    hasError,
    getErrorMessage,
  };
};
