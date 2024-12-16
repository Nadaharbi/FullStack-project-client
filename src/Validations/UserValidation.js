import * as yup from "yup";

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  currentPassword: yup
  .string()
  .min(6, "Password must be at least 6 characters")
  .max(20, "Password cannot exceed 20 characters")
  .required("Password is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("Password is required"),
   
});
