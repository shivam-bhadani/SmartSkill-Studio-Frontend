import CourseCard from "@/components/CourseCard";

export default function MyCourse() {
  return (
    <div className="w-[1200px] max-w-[90%] mx-auto my-5">
      <h1 className="text-2xl md:text-3xl font-bold my-5 text-center">My Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto place-items-center">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  )
}