import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  try {
    const id = params.id;
    // console.log(id);

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      // Handle non-successful response (e.g., HTTP error status)
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    const main_data = data[0]?.details;
    const imageUrl = main_data?.backgroundImage.url;
    const { title, synopsis, releaseYear } = main_data;

    // console.log(main_data);

    return (
      <div className="p-3 sm:p-10">
        <Link href="/movies" className="text-gray-600 underline">
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
        </div>
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
  description : 'Netflix Movie Detail'
}