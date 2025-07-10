// src/utils/handleLogout.ts
import axios from "axios";
import { API_URL } from "../config";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useHandleLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await axios.post(`${API_URL}/api/v1/auth/logout`, {}, { withCredentials: true });
      logout();               // clear local user state
      navigate("/login");     // redirect to login
    } catch (err) {
      console.error("Logout failed", err);
    }
  }, [logout, navigate]);

  return handleLogout;
};
