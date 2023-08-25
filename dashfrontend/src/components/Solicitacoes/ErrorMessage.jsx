import React from 'react';

const ErrorMessage = ({ error }) => {
  return error ? <p className="text-red-500 text-xs">{error}</p> : null;
};

export default ErrorMessage;
