import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#F3F4F6]">
      <p className="text-xs text-gray-500">
        © 2024 AI Task Reminder. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-500"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-500"
          href="#"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
