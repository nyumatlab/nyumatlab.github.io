import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Getting Started", href: "/getting-started" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "Applications", href: "/applications" },
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
  { name: "Resources", href: "/resources" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-nyu-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between py-6">
          <Link href="/" className="text-2xl font-bold text-nyu-purple">
            MATLAB@NYU
          </Link>
          <div className="hidden md:flex space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-nyu-darkgray hover:text-nyu-purple transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Menu
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-2">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-nyu-darkgray hover:text-nyu-purple transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
