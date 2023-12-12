import React from 'react';
import styles from '../AuthForm/AuthForm.module.scss';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface FormFieldProps {
  fieldName: 'email' | 'password';
  register: UseFormRegister<{ email: string; password: string }>;
  errors?: Record<string, FieldError>;
}

const FormField: React.FC<FormFieldProps> = ({
  fieldName,
  register,
  errors,
}) => (
  <div className={styles.field}>
    <input
      type={fieldName === 'password' ? 'password' : 'text'}
      placeholder={`${
        fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
      } Address`}
      {...register(fieldName)}
      required
    />
    <p className={styles.errorMess}>{errors?.[fieldName]?.message}</p>
  </div>
);

export default FormField;
