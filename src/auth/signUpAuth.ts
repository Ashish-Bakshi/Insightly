import { API_URL } from "../config";
import axios from "axios";
import type { SignUpFormData } from "../types/index";

const signUpAuthHandler = async (formData: SignUpFormData) => {
  console.log(API_URL)
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/signup`, formData, {
      withCredentials: true, // send cookies if needed
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    console.log("Signup success:", response.data);
    return response.data; // You can access user from here
  } catch (error: unknown) {
    console.error("Unexpected error:", error);

    // Show the actual backend error
    if (axios.isAxiosError(error)) {
      console.error("Server Response:", error.response?.data);
    }
  }
};

export default signUpAuthHandler;
