"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema, loginUserType } from "@/zod/loginUser";
import { ReloadIcon } from "@radix-ui/react-icons";
import { fetchApiAction } from "@/server-actions/fetchApiAction";
import { apiEndPoints } from "@/utils/apiEndPoints";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserType>({
    resolver: zodResolver(loginUserSchema),
  });

  const [pending, startTransition] = useTransition();
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  const submitLoginFormHandler = async (formData: loginUserType) => {
    startTransition(async () => {
      const result = await fetchApiAction(apiEndPoints.LOGIN, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result?.statusCode === 200) {
        localStorage.setItem("jwt_token", result?.responseData?.data.access);
      } else {
        setServerErrorMessage(result?.responseData?.message);
      }
    });
  };

  return (
    <div className="py-10">
      <Card className="w-[400px] max-w-[90%] mx-auto">
        <CardHeader className="text-center text-lg">
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          {serverErrorMessage && (
            <div className="my-3 text-center text-xs font-semibold text-red-800">
              {serverErrorMessage}
            </div>
          )}
          <form method="POST" onSubmit={handleSubmit(submitLoginFormHandler)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-xs font-semibold text-red-800">
                    {errors.email?.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                {errors.password && (
                  <div className="text-xs font-semibold text-red-800">
                    {errors.password?.message}
                  </div>
                )}
              </div>
            </div>
            <Button type="submit" className="w-full mt-8" disabled={pending}>
              {pending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
