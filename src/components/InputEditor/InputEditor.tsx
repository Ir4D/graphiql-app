import React, { useState } from 'react';
import { useLocalization } from '../../utils/localization/localizationContext';
import styles from './InputEditor.module.scss';

interface InputEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  title: string;
}

const InputEditor: React.FC<InputEditorProps> = ({
  value,
  onChange,
  placeholder,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, messages } = useLocalization();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h4 className={styles.inputEditor_item} onClick={handleToggle}>
        {messages[locale][title]}
      </h4>
      {isOpen && (
        <textarea
          className={styles.inputEditor_text}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputEditor;
