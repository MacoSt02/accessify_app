import React, { useContext } from 'react';
import { CardContext } from './Card';

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
};

const CardBody: React.FC<CardBodyProps> = ({
    children,
    className = ''
}) => {
    const isInsideCard = useContext(CardContext);
    if (!isInsideCard) throw new Error('CardHeader must be used within a Card component');
    return <div className={`my-6 ${className}`}>{children}</div>;
};

export { CardBody };