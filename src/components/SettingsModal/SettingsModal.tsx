import styles from './SettingsModal.module.scss';
import { useLocalization } from '../../utils/localization/localizationContext';
import { PropsWithChildren } from 'react';
import { SettingsModalProps } from '../../models/settings';

const SettingsModal = ({
  active,
  onSubmit,
  onClose,
  children,
}: PropsWithChildren<SettingsModalProps>) => {
  const { locale, messages } = useLocalization();

  if (!active) {
    return null;
  }

  return (
    <div onClick={onClose} className={styles.settings_modal}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.settings_content}
      >
        <div className={styles.settings_header}>
          <div className={styles.settings_title}>
            {messages[locale].settings_title}
          </div>
        </div>
        <div className={styles.settings_body}>{children}</div>
        <div className={styles.settings_footer}>
          <button onClick={onSubmit} className={styles.settings_sumbit}>
            {messages[locale].settings_submit}
          </button>
          <button onClick={onClose} className={styles.settings_cancel}>
            {messages[locale].settings_cancel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
