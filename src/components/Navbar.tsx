import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          TechTonic
        </Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}