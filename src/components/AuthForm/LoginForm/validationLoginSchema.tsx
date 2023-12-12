import * as yup from 'yup';

export const validationLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/\p{L}/u, 'Password must contain at least 1 letter')
    .matches(/\d/u, 'Password must contain at least 1 number')
    .matches(/[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~\\-]/u, {
      message: 'Password must contain at least 1 special character',
    }),
});
