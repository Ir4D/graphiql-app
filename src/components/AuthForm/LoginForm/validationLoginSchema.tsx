import * as yup from 'yup';
import { Messages } from '../../../models/localization';

const validationLoginSchema = (messages: Messages) => {
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
  });
};

export default validationLoginSchema;
