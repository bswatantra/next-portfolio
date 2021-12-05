import Link from 'next/link'

export default function NavLink({href, active, children}) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-block py-2 px-4 font-bold text-white no-underline'
                    : 'inline-block text-white no-underline hover:text-gray-300 hover:text-underline py-2 px-4'
            }
        >
            {children}
        </Link>
    );
}
