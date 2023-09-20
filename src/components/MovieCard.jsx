import autoprefixer from "autoprefixer"
import Image from "next/image"
import Link from "next/link"

const MovieCard = (curElem) => {

    const { id, type, title, synopsis } = curElem.jawSummary
    const { url } = curElem.jawSummary.backgroundImage
    // console.log(url);
    return (
        <div className="rounded-sm shadow-2xl p-2 hover:scale-105 duration-300">
            <div>
                <Image src={url} alt='Loading...' width={340} height={200} />
            </div>
            <div className="flex flex-col gap-2">
                <p className="mt-3 font-medium">{`${title.substring(0, 25)}...`}</p>
                <p className="text-gray-500 ">{`${synopsis.substring(0, 70)}...`}</p>

                <Link href={`/movies/${id}`} className="text-red-600 duration-300 w-max rounded-full " >
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard
