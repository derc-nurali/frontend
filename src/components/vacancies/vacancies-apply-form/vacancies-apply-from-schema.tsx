import * as yup from 'yup';

export const FIELD_FULL_NAME = 'fullName';
export const FIELD_EMAIL = 'email';
export const FIELD_PHONE = 'phone';
export const FIELD_DESCRIPTION = 'description';
export const FIELD_RESUME = 'resume';

const SUPPORTED_FORMATS = [
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
];

export const vacanciesApplyFromSchema = yup.object({
  [FIELD_FULL_NAME]: yup.string().required('error.required'),
  [FIELD_EMAIL]: yup.string().email().required('error.required'),
  [FIELD_PHONE]: yup.string().required('error.required'),
  [FIELD_DESCRIPTION]: yup.string().required('error.required'),
  [FIELD_RESUME]: yup
    .mixed()
    .required('error.required')
    .test(
      'type',
      'Only doc,docx,pdf files are allowed!',
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .test('fileSize', 'File too large', (value) => value && value.size <= 10 * 1024 * 1024),
});
