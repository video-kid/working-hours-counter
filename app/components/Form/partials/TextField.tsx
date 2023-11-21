import React from 'react';
import { FieldProps } from '../types';

const TextField = React.forwardRef<HTMLTextAreaElement, FieldProps>(
  ({ id, label, placeholder, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default TextField;
