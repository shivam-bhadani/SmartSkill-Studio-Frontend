"use server"

import { loginUserType } from "@/zod/loginUser"

export const loginUserAction = async (data: loginUserType) => {
  console.log("server console", data);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    "jwt": "dlkafldkf"
  }
}