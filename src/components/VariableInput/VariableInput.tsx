import React, { useState } from 'react';
import { useLocalization } from '../../utils/localization/localizationContext';
import styles from './VariableInput.module.scss';

interface VariableInputProps {
  variables: string;
  onChange: (value: string) => void;
}

const VariableInput: React.FC<VariableInputProps> = ({
  variables,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, messages } = useLocalization();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleVariablesChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div
        onClick={handleToggle}
        style={{ cursor: 'pointer', marginBottom: '10px' }}
      >
        <h4 className={styles.variable_item}>{messages[locale].variables}</h4>
      </div>
      {isOpen && (
        <textarea
          className={styles.variable_text}
          value={variables}
          onChange={handleVariablesChange}
          placeholder="Enter variables here"
        />
      )}
    </div>
  );
};

export default VariableInput;
