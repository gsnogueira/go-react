import React from 'react';
import { Alert } from '../../ui/alert';

interface AlertProps {
    status: 'info' | 'warning' | 'success' | 'error';
    title: string;
}

const CustomAlert: React.FC<AlertProps> = ({ status, title }) => {
    return (
        <Alert status={status} title={title}></Alert>
    );
};

export default CustomAlert;