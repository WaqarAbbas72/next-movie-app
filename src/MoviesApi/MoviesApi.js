export const fetchMoviesApi = async () => {
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
  const data = await response.json();

  return data;
};
