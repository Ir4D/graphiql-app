import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthForm.module.scss';
import validationLoginSchema from './validationLoginSchema';
import { Link, useNavigate } from 'react-router-dom';
import { IFormLoginData } from '../../../models/forms';
import { useLocalization } from '../../../utils/localization/localizationContext';
import { auth } from '../../../utils/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks';

interface LoginFormProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClick }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(' ');
  const [user, loading, error] = useAuthState(auth);

  const { locale, messages } = useLocalization();
  const navigate = useNavigate();
  const validationSchema = validationLoginSchema(messages[locale]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormLoginData>({
    resolver: yupResolver(validationSchema),
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
      {renderField('email', 'text', `${messages[locale].placeholder_email}`)}
      {renderField(
        'password',
        'password',
        `${messages[locale].placeholder_password}`
      )}
      <div className={styles.pass_link}>
        <a href="#">{messages[locale].pass_link}</a>
      </div>
      <div className={styles.field}>
        <input
          type="submit"
          value={messages[locale].Sign_in}
          disabled={isDisabled}
          className={`${styles.submitButton} ${
            isDisabled ? styles.disabled : ''
          }`}
        />
      </div>
      <div className={styles.signup_link}>
        {messages[locale].not_a_member}{' '}
        <a href="#" onClick={onClick}>
          {messages[locale].Sign_Up_now}
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
