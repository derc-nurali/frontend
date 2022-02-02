import * as yup from 'yup';

export const FIELD_FULL_NAME = 'fullName';
export const FIELD_EMAIL = 'email';
export const FIELD_PHONE = 'phone';
export const FIELD_MESSAGE = 'message';
export const FIELD_ATTACHMENT = 'attachment';

const SUPPORTED_FORMATS = [
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
];

export const contactsFromSchema = yup.object({
  [FIELD_FULL_NAME]: yup.string().required('error.required'),
  [FIELD_EMAIL]: yup.string().email().required('error.required'),
  [FIELD_PHONE]: yup.string().required('error.required'),
  [FIELD_MESSAGE]: yup.string().required('error.required'),
  [FIELD_ATTACHMENT]: yup
    .mixed()
    .test('type', 'Only doc,docx,pdf files are allowed!', (value) =>
      value ? SUPPORTED_FORMATS.includes(value.type) : true
    )
    .test('fileSize', 'File too large', (value) => (value ? value.size <= 10 * 1024 * 1024 : true)),
});
