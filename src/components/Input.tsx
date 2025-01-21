interface CustomInputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isTextarea?: boolean;
}

const Input: React.FC<CustomInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  isTextarea = false,
}) => {
  const commonClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 active:border-blue-600";

  return isTextarea ? (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${commonClasses} mt-4`}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={commonClasses}
    />
  );
};

export default Input;
