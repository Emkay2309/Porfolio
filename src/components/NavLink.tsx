import Link from "next/link";

interface navLinksProps {
    href : string,
    title : string
}


const NavLink = ({ href , title } : navLinksProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white dark:md:hover:text-slate-900 dark:text-slate-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;