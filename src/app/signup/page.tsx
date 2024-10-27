"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  signupInstructorUserSchema,
  signupInstructorUserType,
  signupStudentUserSchema,
  signupStudentUserType,
} from "@/zod/signupUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { roles } from "@/utils/roles";
import { fetchApiAction } from "@/server-actions/fetchApiAction";
import { apiEndPoints } from "@/utils/apiEndPoints";

export default function Signup() {
  const [pendingInstructor, startTransitionInstructor] = useTransition();
  const [pendingStudent, startTransitionStudent] = useTransition();
  const [studentServerErrorMessage, setStudentServerErrorMessage] =
    useState("");
  const [instructorServerErrorMessage, setInstructorServerErrorMessage] =
    useState("");

  const {
    register: instructorRegister,
    handleSubmit: instructorHandleSubmit,
    formState: { errors: instructorErrors },
  } = useForm<signupInstructorUserType>({
    resolver: zodResolver(signupInstructorUserSchema),
  });

  const {
    register: studentRegister,
    handleSubmit: studentHandleSubmit,
    formState: { errors: studentErrors },
  } = useForm<signupStudentUserType>({
    resolver: zodResolver(signupStudentUserSchema),
  });

  const submitStudentFormHandler = (formData: signupStudentUserType) => {
    const requestBody = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      role: roles.STUDENT,
    };
    startTransitionStudent(async () => {
      const result = await fetchApiAction(apiEndPoints.SIGNUP, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result?.statusCode === 201 && result.responseData?.status) {
        alert("Signup successfull");
      } else {
        setStudentServerErrorMessage(result?.responseData?.message);
      }
    });
  };

  const submitInstructorFormHandler = (formData: signupInstructorUserType) => {
    const requestBody = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      about: formData.about,
      role: roles.INSTRUCTOR,
    };
    startTransitionStudent(async () => {
      const result = await fetchApiAction(apiEndPoints.SIGNUP, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result?.statusCode === 201 && result.responseData?.status) {
        alert("Signup successfull");
      } else {
        setInstructorServerErrorMessage(result?.responseData?.message);
      }
    });
  };

  return (
    <Tabs defaultValue="student" className="w-[400px] max-w-[90%] m-auto py-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="student">As Student</TabsTrigger>
        <TabsTrigger value="instructor">As Instructor</TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <Card>
          <CardHeader className="text-center text-lg">
            <CardTitle>Register as Student</CardTitle>
          </CardHeader>
          <CardContent>
            {studentServerErrorMessage && (
              <div className="my-3 text-center text-xs font-semibold text-red-800">
                {studentServerErrorMessage}
              </div>
            )}
            <form
              method="POST"
              onSubmit={studentHandleSubmit(submitStudentFormHandler)}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">
                    Email<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...studentRegister("email")}
                  />
                  {studentErrors.email && (
                    <div className="text-xs font-semibold text-red-800">
                      {studentErrors.email?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="first_name">
                    First Name<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Enter your First Name"
                    {...studentRegister("first_name")}
                  />
                  {studentErrors.first_name && (
                    <div className="text-xs font-semibold text-red-800">
                      {studentErrors.first_name?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    placeholder="Enter your Last Name"
                    {...studentRegister("last_name")}
                  />
                  {studentErrors.last_name && (
                    <div className="text-xs font-semibold text-red-800">
                      {studentErrors.last_name?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">
                    Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...studentRegister("password")}
                  />
                  {studentErrors.password && (
                    <div className="text-xs font-semibold text-red-800">
                      {studentErrors.password?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="cpassword">
                    Confirm Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="cpassword"
                    type="password"
                    placeholder="Enter your password"
                    {...studentRegister("cpassword")}
                  />
                  {studentErrors.cpassword && (
                    <div className="text-xs font-semibold text-red-800">
                      {studentErrors.cpassword?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="profile_picture">Profile Picture</Label>
                  <Input id="profile_picture" type="file" />
                </div>
                <div>
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={pendingStudent}
                  >
                    {pendingStudent && (
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="instructor">
        <Card>
          <CardHeader className="text-center text-lg">
            <CardTitle>Register as Instructor</CardTitle>
          </CardHeader>
          <CardContent>
            {instructorServerErrorMessage && (
              <div className="my-3 text-center text-xs font-semibold text-red-800">
                {instructorServerErrorMessage}
              </div>
            )}
            <form
              method="POST"
              onSubmit={instructorHandleSubmit(submitInstructorFormHandler)}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">
                    Email<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...instructorRegister("email")}
                  />
                  {instructorErrors.email && (
                    <div className="text-xs font-semibold text-red-800">
                      {instructorErrors.email?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="first_name">
                    First Name<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Enter your First Name"
                    {...instructorRegister("first_name")}
                  />
                  {instructorErrors.first_name && (
                    <div className="text-xs font-semibold text-red-800">
                      {instructorErrors.first_name?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    placeholder="Enter your Last Name"
                    {...instructorRegister("last_name")}
                  />
                  {instructorErrors.last_name && (
                    <div className="text-xs font-semibold text-red-800">
                      {instructorErrors.last_name?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">
                    Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...instructorRegister("password")}
                  />
                  {instructorErrors.password && (
                    <div className="text-xs font-semibold text-red-800">
                      {instructorErrors.password?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="cpassword">
                    Confirm Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="cpassword"
                    type="password"
                    placeholder="Enter your password"
                    {...instructorRegister("cpassword")}
                  />
                  {instructorErrors.cpassword && (
                    <div className="text-xs font-semibold text-red-800">
                      {instructorErrors.cpassword?.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="profile_picture">Profile Picture</Label>
                  <Input id="profile_picture" type="file" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="about">About</Label>
                  <Textarea placeholder="Write about yourself" id="about" />
                  {instructorErrors.about && (
                    <div className="text-xs font-semibold text-red-800">
                      {instructorErrors.about?.message}
                    </div>
                  )}
                </div>
                <div>
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={pendingInstructor}
                  >
                    {pendingInstructor && (
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
