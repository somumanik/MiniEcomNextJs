// components/Header.js

import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-gray-800 text-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-semibold">
                    <Link href={"/"} className="text-white">
                        My Next.js App
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link href={"/about-us"} className="text-white hover:text-blue-400">
                        About
                    </Link>
                    <Link href={"/product"} className="text-white hover:text-blue-400">
                        Product
                    </Link>
                    <Link href={"/contact-us"} className="text-white hover:text-blue-400">
                      Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
