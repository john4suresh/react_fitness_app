export const exerciseOptions = {
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_X_RAPIDAPI_KEY}`,
    "X-RapidAPI-Host": `${import.meta.env.VITE_X_RAPIDAPI_HOSTS}`,
  },
};

console.log(import.meta.env.VITE_X_RAPIDAPI_KEY, "====> 1");
console.log(import.meta.env.VITE_X_RAPIDAPI_HOSTS, "====> 2");

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
