export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string
}

export interface SignUpFormData  {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
};

export interface LogInFormData {
  email: string;
  password: string;
}