import React from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    color?: ButtonColor;
    radius?: ButtonRadius;
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
}

const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};

const colorStyles = {
    default: 'bg-default text-white hover:bg-default-hover',
    primary: 'bg-primary text-white hover:bg-primary-hover',
    success: 'bg-success text-white hover:bg-success-hover',
    warning: 'bg-warning text-white hover:bg-warning-hover',
    info: 'bg-info text-white hover:bg-info-hover',
    danger: 'bg-danger text-white hover:bg-danger-hover',
};

const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
};

const Button: React.FC<ButtonProps> = ({
    size = 'md',
    color = 'primary',
    radius = 'md',
    fullWidth = false,
    disabled = false,
    className = '',
    children,
    ...rest
}) => {
    const hasBackgroundClass = /\bbg-[^\s]+/.test(className);
    return (
        <button
            className={`transition-all duration-200
                ${sizeStyles[size]}
                ${radiusStyles[radius]}
                ${fullWidth ? 'w-full' : ''}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${!hasBackgroundClass ? colorStyles[color] : ''}
                ${className}`}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export { Button };