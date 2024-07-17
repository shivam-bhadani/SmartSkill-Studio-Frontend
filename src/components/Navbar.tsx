import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import navItemsStudent from "@/constants/navItemsStudent";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary fixed top-0 z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-primary">
          <div className="grid gap-2 py-6">
            {navItemsStudent.map((item, key) => (
              <Link
                key={key}
                href={item.link}
                className="flex w-full items-center py-2 text-lg font-semibold text-white"
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <h1 className="font-bold text-lg text-white">SmartSkill Studio</h1>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {navItemsStudent.map((item, key) => (
          <Link
            key={key}
            href={item.link}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}