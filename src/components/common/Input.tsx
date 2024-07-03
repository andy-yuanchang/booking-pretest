import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  type?: string;
  error?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', error, placeholder, registration }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...registration}
      className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 h-20 sm:h-10`}
    />
    {error && <span className="text-red-600">{error}</span>}
  </div>
);

export default Input;