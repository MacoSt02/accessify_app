import React, { useContext } from 'react';
import { CardContext } from './Card';

interface CardHeaderProps {
    children: React.ReactNode;
    separator?: boolean;
    className?: string;
};

const CardHeader: React.FC<CardHeaderProps> = ({
    children,
    separator = false,
    className = ''
}) => {
    const isInsideCard = useContext(CardContext);
    if (!isInsideCard) throw new Error('CardHeader must be used within a Card component');
    return (
        <>
            <div className={className}>
                {children}
            </div>
            {separator && <div className='border-b border-zinc-600 my-6 -mx-6'></div>}
        </>
    );
};

export { CardHeader };