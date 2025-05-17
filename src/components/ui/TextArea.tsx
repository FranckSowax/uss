"use client"

import React from 'react';

type TextAreaProps = {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  helperText?: string;
  maxLength?: number;
};

const TextArea = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  error,
  required = false,
  disabled = false,
  className = '',
  helperText,
  maxLength,
}: TextAreaProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        className={`w-full px-4 py-2 rounded-lg border ${
          error 
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-medium focus:ring-primary focus:border-primary'
        } transition-colors duration-200 focus:outline-none ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : ''
        }`}
      />
      
      {maxLength && value && (
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-500">
            {value.length}/{maxLength}
          </span>
        </div>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default TextArea;
