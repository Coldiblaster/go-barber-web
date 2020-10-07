import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(() => {
    console.log('singIn');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Diego' }}>
      {children}
    </AuthContext.Provider>
  );
};
