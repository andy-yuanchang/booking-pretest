import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
  label: string;
  error?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
}

export default function TextArea({ label, error, placeholder, registration }: TextAreaProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        {...registration}
        className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2`}
        rows={6}
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  )
}
