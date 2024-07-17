import CourseSideBar from "@/components/CourseSideBar";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <CourseSideBar />
      <div className="ml-[180px] w-full">{children}</div>
    </section>
  );
}
