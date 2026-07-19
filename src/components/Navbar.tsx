import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-amber-600 text-gray-800 p-4">
      Moj Navbar
      <span className="pl-4">|</span>
      <Link className="pl-4" href="/awesome">hello mothertrucker</Link>
    </nav>
  );
}