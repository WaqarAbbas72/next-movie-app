import Link from "next/link"
import img1 from '/public/img1.png'
import Image from "next/image"

const Herosection = ({Title , ImageUrl , btnTitle}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen text-white bg-gradient-to-r from-black to-red-900">
            <div className="px-10 flex flex-col justify-center gap-5">
                <h1 className="text-5xl font-bold">{Title}</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem voluptatum ab sint vitae, numquam doloribus excepturi quasi praesentium nobis debitis exercitationem explicabo cumque repellendus mollitia aliquam voluptatibus rem porro.</p>

                <button className="border w-max py-2 px-3 rounded-full border-white hover:text-red-600 duration-300">
                    <Link href='/movies'>{btnTitle}</Link>
                </button>
            </div>
            <div className="px-10 flex lg:flex-col justify-center gap-5">
                <Image src={ImageUrl} alt="Netflix" width={500} height={100} />
            </div>
        </div>
    )
}

export default Herosection
