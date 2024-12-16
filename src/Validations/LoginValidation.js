import * as yup from "yup";

export const LoginValidation = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
});
