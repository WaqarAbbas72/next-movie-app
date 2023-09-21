import Link from "next/link"
import Image from "next/image"

const Herosection = ({ Title, ImageUrl, btnTitle , btnPath}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen text-white bg-zinc-950">
            <div className="px-10 flex flex-col justify-center gap-5">
                <h1 className="text-5xl font-bold">{Title}</h1>
                <p className="text-lg">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>

                <button className="border w-max py-2 px-3 rounded-full border-red-600 hover:border-white hover:text-red-600 duration-300">
                    <Link href={`${btnPath}`}>{btnTitle}</Link>
                </button>
            </div>
            <div className="px-10 flex lg:flex-col justify-center gap-5">
                <Image src={ImageUrl} alt="Netflix" width={500} height={100} />
            </div>
        </div>
    )
}

export default Herosection
