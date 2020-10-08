import React, { createContext, useContext } from 'react';

const ToastContext = createContext();

const ToastProvider: React.FC = ({ children }) => {
  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
};

function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
