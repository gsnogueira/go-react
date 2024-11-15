import React from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from "../../components/ui/empty-state";
import styles from './NotFound.module.css';
import { BiSolidError } from 'react-icons/bi';

const NotFound: React.FC = () => {
    return (
        <EmptyState className={styles.empty}
        icon={<BiSolidError />}
        title="404 - Page Not Found"
        description="Sorry, the page you are looking for does not exist."
      >
        <Link to="/">Go to Home</Link>
      </EmptyState>
    );
};

export default NotFound;