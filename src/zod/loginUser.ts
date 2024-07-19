import { z } from "zod";

export const loginUserSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z.string().min(1, { message: "Password is required" }),
});

export type loginUserType = z.infer<typeof loginUserSchema>;
