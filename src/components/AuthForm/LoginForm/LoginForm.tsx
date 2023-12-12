import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthForm.module.scss';
import { validationLoginSchema } from './validationLoginSchema';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClick }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    /*создано исключительно для проверки*/
    console.log(data);
    /*сюда можно добавить ссылку на нужную страницу, или просто удалить*/
    navigate('/');
  };

  return (
    <form
      className={`${styles.form} ${styles.login}`}
      onSubmit={handleSubmit(onSubmit)}
      action="#"
    >
      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email Address"
          {...register('email')}
          required
        />
        <p className={styles.errorMess}>{errors.email?.message}</p>
      </div>
      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          required
        />
        <p className={styles.errorMess}>{errors.password?.message}</p>
      </div>
      <div className={styles.pass_link}>
        <a href="#">Forgot password?</a>
      </div>
      <div className={styles.field}>
        <input
          type="submit"
          value="Sign In"
          disabled={isSubmitting || !!Object.keys(errors).length}
          className={`${styles.submitButton} ${
            isSubmitting || !!Object.keys(errors).length ? styles.disabled : ''
          }`}
        />
      </div>
      <div className={styles.signup_link}>
        Not a member?{' '}
        <a href="#" onClick={onClick}>
          Sign Up now
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
