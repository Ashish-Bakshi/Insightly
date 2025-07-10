import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types';
import { getUser } from '../auth/getUser'
// import axios from 'axios'
// import { API_URL } from '../config';
// import { useNavigate } from 'react-router-dom';
interface AuthContextType {
    user: User | null;
    login: (userData:User) => void;
    logout: () => void;
}


// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC< { children: React.ReactNode } > = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // null if not logged in
  // const navigate = useNavigate()
  // Persist login with localStorage
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          const data = await getUser(); // fetch from cookie
          if (data && data.user) {
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
          }
        }
      } catch (error) {
        console.error("Auto-auth failed:", error);
        localStorage.removeItem('user'); // Clean up if cookie is invalid
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
  setUser(null);
  localStorage.removeItem('user');
};



  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};