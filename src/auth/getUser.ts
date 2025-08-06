import { API_URL } from "../config";
import axios from "axios";

export const getUser = async () => {
  const response = await axios.get(`${API_URL}/api/v1/auth/getUser`, {
    withCredentials: true, // Important to send the cookie
  });
  console.log("User from backend:", response.data);
  return response.data;
};
