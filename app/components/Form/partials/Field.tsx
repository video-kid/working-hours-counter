import React from 'react';
import { FieldProps } from '../types';

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ id, label, placeholder, type = 'text', ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default Field;
