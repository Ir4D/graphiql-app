import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthForm.module.scss';
import { validationLoginSchema } from './validationLoginSchema';

interface LoginFormProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClick }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationLoginSchema),
  });

  const { errors } = formState;

  const onSubmit = (data: { email: string; password: string }) => {
    /*создано исключительно для проверки*/
    console.log(data);
  };

  return (
    <form
      className={`${styles.form} ${styles.login}`}
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
        <p>{errors.email?.message}</p>
      </div>
      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          required
        />
        <p>{errors.password?.message}</p>
      </div>
      <div className={styles.pass_link}>
        <a href="#">Forgot password?</a>
      </div>
      <div className={styles.field}>
        <input type="submit" value="Sign In" />
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
