import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import Nav from "./Nav"

const Header = () => {
    return (
        <div className="flex items-center justify-between px-10 bg-black text-white h-16 fixed z-10 w-full mb-10">
            <div>
                <h1 className="text-3xl font-bold text-red-600">NETFLIX</h1>
            </div>

            <Nav />
        </div>
    )
}

export default Header
