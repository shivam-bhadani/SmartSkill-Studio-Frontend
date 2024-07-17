import CourseCard from "@/components/CourseCard";

export default function MyCourse() {
  return (
    <div className="w-[1200px] max-w-[90%] mx-auto my-5 mt-28">
      <h1 className="text-2xl md:text-3xl font-bold my-5 text-center">
        My Courses
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto place-items-center">
        <CourseCard
          title="Web Development"
          instructor="Shivam Bhadani"
          thumbnail={
            "https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
          }
          slug="1"
          bought={true}
        />
        <CourseCard
          title="Web Development"
          instructor="Shivam Bhadani"
          thumbnail={
            "https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
          }
          slug="2"
          bought={true}
        />
        <CourseCard
          title="Web Development"
          instructor="Shivam Bhadani"
          thumbnail={
            "https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
          }
          slug="3"
          bought={true}
        />
        <CourseCard
          title="Web Development"
          instructor="Shivam Bhadani"
          thumbnail={
            "https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
          }
          slug="3"
          bought={true}
        />
        <CourseCard
          title="Web Development"
          instructor="Shivam Bhadani"
          thumbnail={
            "https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg"
          }
          slug="3"
          bought={true}
        />
      </div>
    </div>
  );
}
