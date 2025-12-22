import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  isActive?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  isActive = false,
  className = '',
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
  
  const variantStyles = {
    primary: isActive
      ? 'bg-blue-600 text-white'
      : 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: isActive
      ? 'bg-gray-600 text-white'
      : 'bg-gray-500 text-white hover:bg-gray-600',
    outline: isActive
      ? 'border-2 border-blue-600 text-blue-600 bg-blue-50'
      : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

