import Link from "next/link";

export default function CourseSideBar() {
  return (
    <div className="w-[180px] bg-slate-100 h-[calc(100vh-80px)] flex flex-col fixed left-0 top-[80px]">
      <Link
        href="#"
        className="p-4 transition-colors border-b-2 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900"
      >
        Over View
      </Link>
      <Link
        href="#"
        className="p-4 transition-colors border-b-2 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900"
      >
        Lectures
      </Link>
      <Link
        href="#"
        className="p-4 transition-colors border-b-2 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900"
      >
        Hangout
      </Link>
      <Link
        href="#"
        className="p-4 transition-colors border-b-2 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900"
      >
        Reviews
      </Link>
      <Link
        href="#"
        className="p-4 transition-colors border-b-2 hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900"
      >
        Notice
      </Link>
    </div>
  );
}
