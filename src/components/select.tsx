import React from 'react';
import { SelectProps } from '../types/interfaces';

export const Select: React.FC<SelectProps> = ({ options, className, onChange, selectedValue }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select className={className} value={selectedValue} onChange={handleSelectChange}>
      {options.name && <option>Any {options.name}</option>}
      {!options.name && options.trivia_categories && <option>Any Category</option>}

      {options.data?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
      {!options.data && options.trivia_categories?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
