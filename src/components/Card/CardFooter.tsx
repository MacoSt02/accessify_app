import React, { useContext } from 'react';
import { CardContext } from './Card';

interface CardFooterProps {
    children: React.ReactNode;
    separator?: boolean;
    className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
    children,
    separator = false,
    className = ''
}) => {
    const isInsideCard = useContext(CardContext);
    if (!isInsideCard) throw new Error('CardFooter must be used within a Card component');
    return (
        <>
            {separator && <div className="border-t border-zinc-600 my-6 -mx-6"></div>}
            <div className={className}>
                {children}
            </div>
        </>
    );
};

export { CardFooter };