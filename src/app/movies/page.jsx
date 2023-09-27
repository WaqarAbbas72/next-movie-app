import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { fetchMoviesApi } from "@/MoviesApi/MoviesApi";

const Movies = async () => {
    try {
        const response = await fetchMoviesApi()
        const main_data = response.titles;

        return (
            <div className="bg-zinc-900 text-white pt-20">
                <h1 className="text-center text-4xl font-bold">Series & Movies</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-3 md:p-10">
                    {main_data?.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />;
                    })}
                </div>
            </div>
        );
    } catch (error) {
        // Handle the error here
        console.error("Error fetching data:", error);
        return (
            <div className="flex flex-col justify-center items-center mt-20">
                <h1 className="text-lg text-red-600">Error occurred while fetching data</h1>
                <Link href='/' className="text-gray-600 underline">Back to Home</Link>
            </div>
        );
    }
};

export default Movies;

export const metadata = {
    title: 'Movies',
    description: 'Netflix Movies'
}