import axios from "axios";

// const API_KEY = "b580b5278617834b2eb1d618e645d5dc";

export const getQuotesApi = async () => {
  const { data } = await axios.get("https://api.quotable.io/quotes");

  return data;
};
