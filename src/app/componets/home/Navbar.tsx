'use client'
import Image from "next/image";
import headerLogo from "../../../../public/images/header-logo.svg";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
    const pathname = usePathname()
    const caseStudiesPaths = [
        '/case-studies',
        '/case-studies/loanify-casestudy',
        '/case-studies/altorum-casestudy',
        '/case-studies/petsouk-casestudy'
      ];
      
      const isCaseStudyPath = caseStudiesPaths.includes(pathname);
    return (
        <>
            <nav className="bg-black">
                <div className="container mx-auto">
                    <div className="relative flex h-24 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                                Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block"
          --> */}
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* <!--
                                Icon when menu is open.

                                Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/"><Image src={headerLogo} alt="Logo"/></Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-8">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <Link href="/" className={`bg-gray-900 text-grey hover:text-white rounded-md px-3 py-2 text-lg font-regular ${pathname === '/' ? 'active: text-white' : ''}`}>Home</Link>
                                    <Link href="/about" className={`text-grey hover:text-white rounded-md px-3 py-2 text-lg font-regular ${pathname === '/about' ? 'active: text-white' : ''}`}>About</Link>
                                    <Link href="/case-studies" className={`text-grey hover:text-white rounded-md px-3 py-2 text-lg font-regular  ${isCaseStudyPath ? 'active: text-white' : ''}`}>Case Studies</Link>
                                    <a href="/Devesh_Resume.pdf" download className="text-white bg-blue hover:bg-blue-700 hover:text-white px-8 py-2.5 text-lg font-regular">Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>

        </>
    );
}