import React from 'react';
import styles from '../AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSignupSchema } from './validationSignupSchema';

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSignupSchema),
  });

  const onSubmit = (data: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    /*создано исключительно для проверки*/
    console.log(data);
    /*сюда можно добавить ссылку на нужную страницу, или просто удалить*/
    navigate('/');
  };

  const isDisabled = isSubmitting || !!Object.keys(errors).length;
  return (
    <form
      className={`${styles.form} ${styles.signup}`}
      onSubmit={handleSubmit(onSubmit)}
      action="#"
    >
      <div className={styles.field}>
        <input
          type="text"
          placeholder="Email Address"
          {...register('email')}
          required
        />
        <p className={styles.errorMess}>{errors?.email?.message}</p>
      </div>
      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          required
        />
        <p className={styles.errorMess}>{errors?.password?.message}</p>
      </div>
      <div className={styles.field}>
        <input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword')}
          required
        />
        <p className={styles.errorMess}>{errors?.confirmPassword?.message}</p>
      </div>
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
