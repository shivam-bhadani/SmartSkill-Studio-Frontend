import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Ratings } from "./ui/ratings";

export default function ReviewCard() {
  return (
    <Card className="w-[350px] max-w-[90%]">
      <CardHeader>
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div>Shivam Bhadani</div>
            <div> <Ratings rating={4} size={12} /> </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi nesciunt veniam odit sapiente laborum voluptatum tempora, quisquam ipsum tempore! Inventore, quibusdam. Iste nobis harum adipisci accusamus tempore ex error quam.</CardContent>
    </Card>
  );
}
