import { useEffect } from 'react';
import styles from '../AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
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
  const [user, loading] = useAuthState(auth);

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
    registerWithEmailAndPassword(data.name, data.email, data.password);
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
        id={fieldName}
      />
      <p className={styles.errorMess} data-testid={`${fieldName}-error`}>
        {errors?.[fieldName]?.message}
      </p>
    </div>
  );

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/main');
  }, [user, loading, navigate]);

  return (
    <form
      className={`${styles.form} ${styles.signup}`}
      onSubmit={handleSubmit(onSubmit)}
      action="#"
    >
      {renderField('name', 'text', `${messages[locale].placeholder_name}`)}
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
          data-testid="submit-button"
          value={messages[locale].Sign_up}
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
