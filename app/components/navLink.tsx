"use cleint";
import Link from "next/link";

type NavLink = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavLink) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:bg-transparent md:p-0
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
      aria-current="page"
    >
      {title}
    </Link>
  );
};

export default NavLink;
