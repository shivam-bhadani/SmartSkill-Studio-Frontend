import CourseGrid from "@/components/CourseGrid";
import { fetchApiAction } from "@/server-actions/fetchApiAction";
import { apiEndPoints } from "@/utils/apiEndPoints";

export default async function Home() {
  const response = await fetchApiAction(apiEndPoints.GET_COURSES);
  return (
    <div className="w-[1200px] max-w-[90%] mx-auto my-5 mt-28">
      <h1 className="text-2xl md:text-3xl font-bold my-5 text-center">
        All Available Courses
      </h1>
    </div>
  );
}
