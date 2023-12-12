import * as yup from 'yup';
import { validationLoginSchema as baseSchema } from '../LoginForm/validationLoginSchema';

export const validationSignupSchema = baseSchema.shape({
  confirmPassword: yup
    .string()
    .required('Password confirmation is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/\p{L}/u, 'Password must contain at least 1 letter')
    .matches(/\d/u, 'Password must contain at least 1 number')
    .matches(/[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~\\-]/u, {
      message: 'Password must contain at least 1 special character',
    })
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
