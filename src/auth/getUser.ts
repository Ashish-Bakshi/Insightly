import { API_URL } from "../config";
import axios from "axios";

export const getUser = async () => {
  const response = await axios.get(`${API_URL}/api/v1/auth/getUser`, {
    withCredentials: true, // Important to send the cookie
  });
  return response.data;
};
