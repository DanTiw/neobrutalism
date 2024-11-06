import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { label: 'About', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-bg p-4 flex justify-center items-center shadow-text shadow-lg">
      <div className="flex space-x-4 items-center">
        {navLinks.map((link) => (
          <NavLink key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </nav>
  );
}

interface NavLinkProps {
  label: string;
  href: string;
}

function NavLink({ label, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
       px-8 py-4 text-lg font-bold bg-[#ffc800] border-4 border-black rounded-none  hover:rotate-0 transition-all duration-300 shadow-[5px_4px_0px_0px_#000] hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none"
    >
      {label.toUpperCase()}
    </Link>
  );
}