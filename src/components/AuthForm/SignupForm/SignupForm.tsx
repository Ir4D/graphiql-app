import { useEffect, useState } from 'react';
import styles from '../AuthForm.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSignupSchema } from './validationSignupSchema';
import { IFormSignupData } from '../../../models/forms';
import { useLocalization } from '../../../utils/localization/localizationContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  registerWithEmailAndPassword,
} from '../../../utils/firebase/firebase';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('testName');
  const [user, loading, error] = useAuthState(auth);

  const { locale, messages } = useLocalization();
  const navigate = useNavigate();
  const validationSchema = validationSignupSchema(messages[locale]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormSignupData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormSignupData) => {
    console.log(data);
    /*Отправка валидных данных в Firebase */
    registerWithEmailAndPassword(name, data.email, data.password);
    /*сюда можно добавить ссылку на нужную страницу, или просто удалить*/
    if (user) navigate('/dashboard');
  };

  const fakeRegister = () => {
    const email = 'fguiragiaccas@hotmail.com';
    const name = 'Vasya';
    const password = '11223344qq?';

    registerWithEmailAndPassword(name, email, password);
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

  // const registerData = () => {
  //   const data = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   };
  //   console.log(data);
  // };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading]);

  return (
    <form
      className={`${styles.form} ${styles.signup}`}
      onSubmit={handleSubmit(onSubmit)}
      action="#"
    >
      {renderField('email', 'text', `${messages[locale].placeholder_email}`)}
      {renderField(
        'password',
        'password',
        `${messages[locale].placeholder_password}`
      )}
      {renderField(
        'confirmPassword',
        'password',
        `${messages[locale].placeholder_confirm_password}`
      )}
      <div className={styles.field}>
        <input
          type="submit"
          value={messages[locale].Sign_up}
          disabled={isDisabled}
          // onClick={() => fakeRegister()}
          className={`${styles.submitButton} ${
            isDisabled ? styles.disabled : ''
          }`}
        />
      </div>
    </form>
  );
};

export default SignupForm;
