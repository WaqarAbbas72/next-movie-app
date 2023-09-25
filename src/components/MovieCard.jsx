import autoprefixer from "autoprefixer"
import Image from "next/image"
import Link from "next/link"

const MovieCard = (curElem) => {

    const { id, title } = curElem.jawSummary
    const { url } = curElem.jawSummary.backgroundImage
    // console.log(url);
    return (
        <Link href={`/movies/${id}`}>
            <div className="rounded-sm p-2 hover:scale-105 duration-300">
                <div>
                    <Image src={url} alt='Loading...' width={340} height={200} />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="mt-3 font-medium text-center">{`${title.substring(0, 25)}...`}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
