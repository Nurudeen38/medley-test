// @ts-nocheck
import React from 'react';
import Select from 'react-dropdown-select';
import { Label } from './common.styled';

type Option = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  options: Option[];
  placeholder?: string;
  value: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  placeholder,
  label,
  onChange,
  value,
  ...rest
}) => {
  const option = options.find((option) => option.value === value);
  return (
    <div>
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <Select
        searchable={false}
        dropdownHandle
        options={options}
        values={option && [option]}
        onChange={(values: Option[]) => {
          const selectedValue: string = values.length ? values[0].value : '';
          onChange(selectedValue);
        }}
        placeholder={placeholder}
        className="!border-dotted !border !border-secondary !rounded-2xl"
        {...rest}
      />
    </div>
  );
};

export default CustomDropdown;
