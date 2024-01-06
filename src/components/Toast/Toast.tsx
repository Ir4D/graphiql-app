import { useEffect, useState } from 'react';
import styles from './Toast.module.scss';
import { ToastProps } from '../../models/toast';

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [toastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return toastVisible ? <div className={styles.toast}>{message}</div> : null;
};

export default Toast;
