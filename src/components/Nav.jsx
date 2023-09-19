import Link from "next/link"

const Nav = () => {
    return (
        <div>
            <ul className="flex gap-3">
                <li className="hover:text-red-600 duration-300"><Link href='/'>Home</Link></li>
                <li className="hover:text-red-600 duration-300"><Link href='/about'>About</Link></li>
                <li className="hover:text-red-600 duration-300"><Link href='/movies'>Movies</Link></li>
                <li className="hover:text-red-600 duration-300"><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav
