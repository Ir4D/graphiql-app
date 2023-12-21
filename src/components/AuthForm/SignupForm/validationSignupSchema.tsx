import * as yup from 'yup';
import { Messages } from '../../../models/localization';

export const validationSignupSchema = (messages: Messages) => {
  return yup.object().shape({
    email: yup
      .string()
      .required(messages.email_required)
      .email(messages.email_mess),
    password: yup
      .string()
      .required(messages.password_required)
      .min(8, messages.pass_mess_min)
      .matches(/\p{L}/u, messages.pass_mess_letter)
      .matches(/\d/u, messages.pass_mess_number)
      .matches(
        /[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~\\-]/u,
        messages.pass_mess_special_character
      ),
    confirmPassword: yup
      .string()
      .required(messages.pass_confirm_required)
      .min(8, messages.pass_mess_min)
      .matches(/\p{L}/u, messages.pass_mess_letter)
      .matches(/\d/u, messages.pass_mess_number)
      .matches(/[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~\\-]/u, {
        message: messages.pass_mess_special_character,
      })
      .oneOf([yup.ref('password')], messages.pass_confirm_oneOf),
    name: yup.string().required(messages.name_required),
  });
};
