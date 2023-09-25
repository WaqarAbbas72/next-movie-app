import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
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
    const id = params.id

    if (!response.ok) {
      // Handle non-OK response (e.g., network error, 404, etc.)
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const main_data = data.titles;
    // console.log(main_data);
    console.log(id);

    const filteredMovies = main_data.filter((item) => item.jawSummary.id === id)
    console.log(filteredMovies);

    if (filteredMovies.length === 0) {
      // Handle the case where the movie with the given id is not found
      return (
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-lg text-red-600">Movie not found</h1>
          <Link href="/movies" className="text-gray-600 underline">
            Back to Movies
          </Link>
        </div>
      );
    }

    return (
      <div className="p-3 sm:p-10">
        {/* <Link href="/movies" className="text-gray-600 underline">
          Back to Movies
        </Link>
        <p className="font-bold text-xl text-red-600 my-5">
          NETFLIX <span className="text-gray-400">/ {main_data.type}</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <Image src={imageUrl} alt="Loading..." width={800} height={600} />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-3 text-red-600">NETFLIX <span className="text-gray-400">ORIGINAL</span></h1>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-xl text-gray-500 my-4">{synopsis}</p>
            <p className="text-xl text-red-600 ">Genre : <span className="text-black"> {main_data.genres[0].name}</span></p>
            <p className="text-xl text-red-600 ">Type : <span className="text-black"> {main_data.type}</span></p>
            <p className="text-xl text-red-600 ">Release Year : <span className="text-black"> {releaseYear}</span></p>
            <p className="text-xl text-red-600 ">Director : <span className="text-black"> {main_data.directors[0]?.name || null}</span></p>
          </div>
        </div> */}
      </div>
    );
  } catch (error) {
    // Handle errors here
    console.error("API Error:", error);
    return <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-lg text-red-600">Error occurred while fetching data</h1>
      <Link href='/' className="text-gray-600 underline">Back to Home</Link>
    </div>;
  }
};

export default page;

export const metadata = {
  title: 'Movie Detail',
  description: 'Netflix Movie Detail'
}