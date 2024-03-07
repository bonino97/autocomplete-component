import React from 'react';

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className='error'>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
