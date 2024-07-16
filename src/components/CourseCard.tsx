import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CourseCard() {
  return (
    <Card className="w-[350px] max-w-[90%]">
      <CardHeader>
        <CardTitle>We Development</CardTitle>
        <CardDescription>
          Instructor: Shivam Bhadani
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="rounded-lg"
          width={300}
          height={300}
          src={
            "https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
          }
          alt="Web Dev"
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Visit</Button>
      </CardFooter>
    </Card>
  );
}
