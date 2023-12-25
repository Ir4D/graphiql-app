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
      <h4 className={styles.variable_item} onClick={handleToggle}>
        {messages[locale].variables}
      </h4>
      {isOpen && (
        <textarea
          className={styles.variable_text}
          value={variables}
          onChange={handleVariablesChange}
          placeholder={messages[locale].enter_variables_placeholder}
        />
      )}
    </div>
  );
};

export default VariableInput;
