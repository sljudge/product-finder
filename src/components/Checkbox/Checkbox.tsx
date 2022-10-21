import React from "react";

interface Props {
  isChecked: boolean;
  label: string;
  value: string | number;
  onChange(val: string | number): void;
}

const Checkbox: React.FC<Props> = ({ isChecked, label, value, onChange }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          value={value}
          onChange={handleChange}
        />
        <span className="ml-2 text-sm">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
