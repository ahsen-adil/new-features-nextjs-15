import Image from "next/image";
import logo from "../../../next.js-15.jpeg"
import Link from "next/link";

export default function Navbar() {
    return (
      <>
       <header className="bg-gradient-to-r from-blue-100 to-white text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image src={logo} alt="logo" className="w-[50px] h-[50px] rounded-full"/>
      <span className="ml-3 text-xl font-mono">Next.js 15</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    </nav>
     <Link href="https://nextjs.org/blog/next-15">
    <button className="inline-flex items-center hover:text-white hover:bg-gray-600 duration-700 text-white border-0 py-3 px-3 focus:outline-none bg-gray-900 rounded-full text-base mt-4 md:mt-0">
      Documentation
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
    </Link>
  </div>
</header>
      </>
    );
  }
  