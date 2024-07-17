import ReviewCard from "@/components/ReviewCard";

export default function Reviews() {
  return (
    <div className="w-[1000px] max-w-[90%] mx-auto my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto place-items-center">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
