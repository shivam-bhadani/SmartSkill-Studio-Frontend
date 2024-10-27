import { z } from "zod";

export const signupInstructorUserSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one digit" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    cpassword: z.string(),
    about: z.string().optional(),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords don't match",
    path: ["cpassword"],
  });

export const signupStudentUserSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one digit" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    cpassword: z.string()
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords don't match",
    path: ["cpassword"],
  });

export type signupInstructorUserType = z.infer<
  typeof signupInstructorUserSchema
>;
export type signupStudentUserType = z.infer<typeof signupStudentUserSchema>;
