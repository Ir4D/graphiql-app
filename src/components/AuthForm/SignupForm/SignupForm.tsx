import React from 'react';
import styles from '../AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSignupSchema } from './validationSignupSchema';
import { IFormSignupData } from '../../../models/forms';

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormSignupData>({
    resolver: yupResolver(validationSignupSchema),
  });

  const onSubmit = (data: IFormSignupData) => {
    /*создано исключительно для проверки*/
    console.log(data);
    /*сюда можно добавить ссылку на нужную страницу, или просто удалить*/
    navigate('/');
  };

  const isDisabled = isSubmitting || !!Object.keys(errors).length;

  const renderField = (
    fieldName: keyof IFormSignupData,
    type: string,
    placeholder: string
  ) => (
    <div className={styles.field} key={fieldName}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(fieldName, { required: true })}
      />
      <p className={styles.errorMess}>{errors?.[fieldName]?.message}</p>
    </div>
  );

  return (
    <form
      className={`${styles.form} ${styles.signup}`}
      onSubmit={handleSubmit(onSubmit)}
      action="#"
    >
      {renderField('email', 'text', 'Email Address')}
      {renderField('password', 'password', 'Password')}
      {renderField('confirmPassword', 'password', 'Confirm password')}
      <div className={styles.field}>
        <input
          type="submit"
          value="Sign In"
          disabled={isDisabled}
          className={`${styles.submitButton} ${
            isDisabled ? styles.disabled : ''
          }`}
        />
      </div>
    </form>
  );
};

export default SignupForm;
