import { useTranslation } from 'next-i18next';
import { FormikValues, useFormik } from 'formik';
import { get, forEach } from 'lodash';
import { useState } from 'react';
import { ApiFeedback } from '../../../http';
import {
  FIELD_FULL_NAME,
  FIELD_EMAIL,
  FIELD_PHONE,
  FIELD_MESSAGE,
  FIELD_ATTACHMENT,
  contactsFromSchema,
} from './contacts-from-schema';

export const useContactsForm = () => {
  const { t } = useTranslation();
  const [submitModal, setSubmitModal] = useState<boolean>(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = ({ attachment, ...values }: FormikValues) => {
    const formData = new FormData();
    formData.append('title', t('feedback', 'Обратная связь'));

    if (attachment) {
      formData.append('attachment', attachment);
    }

    forEach(values, (value, field) => {
      const key = `body[${t(field)}]`;
      if (field === FIELD_PHONE) {
        formData.append(key, value.replace(/\s+/g, ''));
      } else {
        formData.append(key, value);
      }
    });

    ApiFeedback.createOne(formData).then(() => {
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
    handleFileChange(FIELD_ATTACHMENT)(event.currentTarget.files[0]);
  };

  const handleResetFiles = () => {
    setFiles(null);
    handleFileChange(FIELD_ATTACHMENT)(null);
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
      [FIELD_MESSAGE]: '',
      [FIELD_ATTACHMENT]: '',
    },
    validationSchema: contactsFromSchema,
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
