import MovieCard from "@/components/MovieCard";

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
            <>
                <h1 className="text-center mt-5 text-2xl font-bold">Series & Movies</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-3 md:p-10">
                    {main_data?.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />;
                    })}
                </div>
            </>
        );
    } catch (error) {
        // Handle the error here
        console.error("Error fetching data:", error);

        // You can also return an error message or render an error component
        return (
            <div>
                <p>An error occurred while fetching data.</p>
            </div>
        );
    }
};

export default Movies;
