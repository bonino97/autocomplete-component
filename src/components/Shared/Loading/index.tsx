import React from 'react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => (
  <div>
    <p>{message}</p>
  </div>
);

export default Loading;
