import React, { createContext } from 'react';

const CardContext = createContext<boolean | null>(null);

type CardSize = 'sm' | 'md' | 'lg' | 'xl';
type CardShadow = 'none' | 'sm' | 'md' | 'lg';
type CardRadius = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
    children?: React.ReactNode | React.ReactNode[];
    size?: CardSize;
    shadow?: CardShadow;
    radius?: CardRadius;
    fullWidth?: boolean;
    isBlurred?: boolean;
    className?: string;
};

const sizeStyles = {
    sm: 'w-[20vw]',
    md: 'w-[30vw]',
    lg: 'w-[40vw]',
    xl: 'w-[50vw]',
};

const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-md',
    md: 'shadow-lg',
    lg: 'shadow-xl',
};

const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-2xl',
};

const Card: React.FC<CardProps> = ({
    children,
    size = 'md',
    shadow = 'md',
    radius = 'lg',
    fullWidth = false,
    isBlurred = false,
    className = ''
}) => {
    return (
        <CardContext.Provider value={true}>
            <div className={`bg-[#1b1b1b] p-6 text-white ${shadowStyles[shadow]} ${radiusStyles[radius]} ${fullWidth ? 'w-full' : sizeStyles[size]} ${isBlurred ? 'backdrop-blur-md bg-opacity-50' : ''} ${className}`} >
                {children}
            </div>
        </CardContext.Provider>
    );
};

export { Card, CardContext };