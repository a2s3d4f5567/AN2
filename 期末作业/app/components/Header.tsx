import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl hover:text-gray-300">
          九月的网站
        </Link>
        <div className="space-x-6">
          <Link href="/portfolio" className="hover:text-gray-300">
            作品集
          </Link>
          <Link href="/qanything" className="hover:text-gray-300">
            QAnything 问答
          </Link>
        </div>
      </nav>
    </header>
  );
} 
