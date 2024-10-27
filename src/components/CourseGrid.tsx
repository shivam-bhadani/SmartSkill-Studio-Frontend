import CourseCard, { ICourseCard } from "@/components/CourseCard";

interface ICourseGrid {
  courses: Array<ICourseCard>;
}

export default function CourseGrid({ courses }: ICourseGrid) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto place-items-center">
      {courses.map((course, key) => (
        <CourseCard
          title={course.title}
          instructor={course.instructor}
          thumbnail={course.thumbnail}
          slug={course.slug}
          bought={true}
        />
      ))}
    </div>
  );
}
