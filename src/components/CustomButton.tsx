import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  color = 'blue',
}) => {
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-700',
    green: 'bg-green-500 hover:bg-green-700',
    red: 'bg-red-500 hover:bg-red-700',
    yellow: 'bg-yellow-500 hover:bg-yellow-700',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${colorClasses[color]} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
