import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Signup() {
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
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">
                    Email<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="first_name">
                    First Name<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Enter your First Name"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    placeholder="Enter your Last Name"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">
                    Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="cpassword">
                    Confirm Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="cpassword"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="profile_picture">Profile Picture</Label>
                  <Input id="profile_picture" type="file" />
                </div>
                <div>
                  <Button className="w-full">Sign Up</Button>
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
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">
                    Email<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="first_name">
                    First Name<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Enter your First Name"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    type="text"
                    placeholder="Enter your Last Name"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">
                    Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="cpassword">
                    Confirm Password<span className="text-red-500"> *</span>
                  </Label>
                  <Input
                    id="cpassword"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="profile_picture">Profile Picture</Label>
                  <Input id="profile_picture" type="file" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="about">About</Label>
                  <Textarea placeholder="Write about yourself" id="about" />
                </div>
                <div>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
