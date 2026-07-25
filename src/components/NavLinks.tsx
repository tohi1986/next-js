"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Meals",
    href: "/meals",
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Share",
    href: "/meals/share",
  },
];


export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 ml-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? "text-black font-bold"
              : ""
          }
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}