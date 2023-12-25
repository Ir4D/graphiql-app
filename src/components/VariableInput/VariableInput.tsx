import React from 'react';

interface VariableInputProps {
  variables: string;
  onChange: (value: string) => void;
}

const VariableInput: React.FC<VariableInputProps> = ({
  variables,
  onChange,
}) => {
  const handleVariablesChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <textarea
        value={variables}
        onChange={handleVariablesChange}
        placeholder="Enter variables here"
      />
    </div>
  );
};

export default VariableInput;
