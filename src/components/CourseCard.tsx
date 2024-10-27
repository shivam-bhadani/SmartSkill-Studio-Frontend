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
import Link from "next/link";

export interface ICourseCard {
  instructor: string;
  title: string;
  slug: string;
  thumbnail: string;
  price?: string;
  bought: boolean;
}

export default function CourseCard(props: ICourseCard) {
  return (
    <Card className="w-[350px] max-w-[90%]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>Instructor: {props.instructor}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="rounded-lg"
          width={300}
          height={300}
          src={props.thumbnail}
          alt="Web Dev"
        />
      </CardContent>
      <CardFooter>
        {props.bought && (
          <Link href={`/courses/${props.slug}`} className="w-full">
            <Button className="w-full">Visit</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
