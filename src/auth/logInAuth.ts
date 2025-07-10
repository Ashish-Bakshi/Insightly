import { API_URL } from "../config";
import axios from "axios";
import type { LogInFormData } from "../types/index";

export const logInAuth = async (formData: LogInFormData) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/auth/login`, formData, {
            withCredentials: true, // send cookies if needed
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Login success:", response.data);
        return response.data; // You can access user from here 
    } catch (error) {
        console.error("Unexpected error:", error);

        // Show the actual backend error
        if (axios.isAxiosError(error)) {
            console.error("Server Response:", error.response?.data);
        }
    }
}