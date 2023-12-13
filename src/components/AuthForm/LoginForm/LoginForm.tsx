import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthForm.module.scss';
import { validationLoginSchema } from './validationLoginSchema';
import { useNavigate } from 'react-router-dom';
import { IFormLoginData } from '../../../models/forms';

interface LoginFormProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClick }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormLoginData>({
    resolver: yupResolver(validationLoginSchema),
  });

  const onSubmit = (data: IFormLoginData) => {
    /*создано исключительно для проверки*/
    console.log(data);
    /*сюда можно добавить ссылку на нужную страницу, или просто удалить*/
    navigate('/');
  };

  const renderField = (
    fieldName: keyof IFormLoginData,
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

  const isDisabled = isSubmitting || !!Object.keys(errors).length;
  return (
    <form
      className={`${styles.form} ${styles.login}`}
      onSubmit={handleSubmit(onSubmit)}
      action="#"
    >
      {renderField('email', 'text', 'Email Address')}
      {renderField('password', 'password', 'Password')}
      <div className={styles.pass_link}>
        <a href="#">Forgot password?</a>
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
