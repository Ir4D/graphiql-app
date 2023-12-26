import React, { useState } from 'react';
import { useLocalization } from '../../utils/localization/localizationContext';

interface HeadersInputProps {
  headers: string;
  onChange: (value: string) => void;
}

const HeaderEditor: React.FC<HeadersInputProps> = ({ headers, onChange }) => {
  const { locale, messages } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleHeadersChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h4 onClick={handleToggle}>{messages[locale].headers}</h4>
      {isOpen && (
        <textarea
          value={headers}
          onChange={handleHeadersChange}
          placeholder="Enter headers here (one per line)"
        />
      )}
    </div>
  );
};

export default HeaderEditor;
