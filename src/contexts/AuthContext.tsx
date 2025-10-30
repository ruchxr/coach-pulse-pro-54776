import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  managerName: string;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [managerName, setManagerName] = useState('');

  useEffect(() => {
    const session = localStorage.getItem('auth_session');
    if (session) {
      const data = JSON.parse(session);
      setIsAuthenticated(true);
      setManagerName(data.managerName);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Demo credentials
    if (email === 'manager@supercoach.com' && password === 'demo123') {
      const sessionData = { managerName: 'Alex Martinez' };
      localStorage.setItem('auth_session', JSON.stringify(sessionData));
      setIsAuthenticated(true);
      setManagerName(sessionData.managerName);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth_session');
    setIsAuthenticated(false);
    setManagerName('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, managerName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
