import NavLink from "./navlink";

export default function Navbar() {
    return (
        <nav id="header"
             className="fixed w-full z-30 top-0 text-white bg-gradient-to-r from-blue-500 to-blue-800">
            <div className="w-3xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 h-16">
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800 no-underline hover:no-underline font-bold"
                       href="#">
                        Swatantra
                    </a>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle"
                            className="flex items-center p-1 text-white hover:text-gray-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto rounded-md hidden mt-2 lg:mt-0 sm:gradient lg:bg-transparent text-white p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <NavLink
                                href="/">Home
                            </NavLink>
                        </li>
                        <li className="mr-3">
                            <NavLink
                                href="/profile">Profile
                            </NavLink>
                        </li>
                        <li className="mr-3">
                            <NavLink
                                href="/contact">Contact
                            </NavLink>
                        </li>
                        <li className="mr-3">
                            <NavLink
                                href="/blog">Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
        </nav>
    )
}