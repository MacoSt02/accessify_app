import React from 'react';

type InputSize = 'sm' | 'md' | 'lg';
type InputColor = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger';
type InputRadius = 'none' | 'sm' | 'md' | 'lg';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: InputSize; // ✅ Ara sí que podem fer servir 'size'
    color?: InputColor;
    radius?: InputRadius;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
}

const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
};

const colorStyles = {
    default: 'bg-default text-white placeholder-gray-300 focus:ring-default',
    primary: 'bg-primary text-white placeholder-gray-300 focus:ring-primary',
    success: 'bg-success text-white placeholder-gray-300 focus:ring-success',
    warning: 'bg-warning text-white placeholder-gray-300 focus:ring-warning',
    info: 'bg-info text-white placeholder-gray-300 focus:ring-info',
    danger: 'bg-danger text-white placeholder-gray-300 focus:ring-danger',
};

const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
};

const Input: React.FC<InputProps> = ({
    size = 'md',
    color = 'default',
    radius = 'md',
    fullWidth = false,
    disabled = false,
    className = '',
    ...rest
}) => {
    const hasBackgroundClass = /\bbg-[^\s]+/.test(className);

    return (
        <input
            className={`transition-all duration-200 outline-none focus:ring-2 focus:ring-opacity-50
                ${sizeStyles[size]}
                ${radiusStyles[radius]}
                ${fullWidth ? 'w-full' : ''}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${!hasBackgroundClass ? colorStyles[color] : ''}
                ${className}
            `}
            disabled={disabled}
            {...rest}
        />
    );
};

export { Input };