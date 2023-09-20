import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const main_data = data[0]?.details;
  const imageUrl = main_data?.backgroundImage.url
  const {title, synopsis} = main_data

  return (
    <div className="p-3 sm:p-10">
      <p className="font-bold text-xl text-red-600 my-5">
        NETFLIX <span className="text-black">/ {main_data.type}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image src={imageUrl} alt="Loading..." width={800} height={600} />
          <p className="text-xl font-bold">{title}</p>
          <p className="text-lg text-gray-500">{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
