import MovieCard from "@/components/MovieCard";
import Link from "next/link";

const Movies = async () => {
    try {
        const url =
            "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b",
                "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
            },
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            // Handle non-OK response (e.g., network error, 404, etc.)
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        const main_data = data?.titles;

        return (
            <div className="bg-zinc-900 text-white">
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
