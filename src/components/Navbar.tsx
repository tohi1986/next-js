import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-amber-600 p-4 flex items-center">

      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={30}
          height={30}
        />

        <span className="font-bold">
          NextLevel food
        </span>
      </Link>


      <NavLinks />

    </nav>
  );
}