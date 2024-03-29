import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthForm.module.scss';
import validationLoginSchema from './validationLoginSchema';
import { useNavigate } from 'react-router-dom';
import { IFormLoginData } from '../../../models/forms';
import { useLocalization } from '../../../utils/localization/localizationContext';
import {
  auth,
  logInWithEmailAndPassword,
} from '../../../utils/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

interface LoginFormProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClick }) => {
  const [user, loading] = useAuthState(auth);

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
    logInWithEmailAndPassword(data.email, data.password);
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
        id={fieldName}
      />
      <p className={styles.errorMess} data-testid={`${fieldName}-error`}>
        {errors?.[fieldName]?.message}
      </p>
    </div>
  );

  const isDisabled = isSubmitting || !!Object.keys(errors).length;

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/main');
  }, [user, loading, navigate]);

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
      <div className={styles.field}>
        <input
          type="submit"
          data-testid="submit-button"
          value={messages[locale].Sign_in}
          disabled={isDisabled}
          className={`${styles.submitButton} ${
            isDisabled ? styles.disabled : ''
          }`}
        />
      </div>
      <div className={styles.signup_link} data-testid="signup-link">
        {messages[locale].not_a_member}{' '}
        <a href="#" onClick={onClick}>
          {messages[locale].Sign_Up_now}
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
