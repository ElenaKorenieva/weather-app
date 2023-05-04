import { useEffect, useState } from "react";
import { getQuotesApi } from "services/apiQuotes";

const Home = ({
  iconWeather,
  city = "Kyiv",
  country,
  temp,
  temp_min,
  temp_max,
  sunrise,
  sunset,
}) => {
  const defaultQuote = {
    author: "Thomas Edison",
    authorSlug: "thomas-edison",
    content: "As a cure for worrying, work is better than whisky.",
    dateAdded: "2023-04-14",
    dateModified: "2023-04-14",
    length: 51,
    tags: ["Humorous"],
    _id: "bfNpGC2NI",
  };
  const [error, setError] = useState(null);

  const [quotes, setQuotes] = useState([defaultQuote]);

  useEffect(() => {
    if (!city) {
      return;
    }
    async function getQuotes() {
      try {
        const data = await getQuotesApi();
        setQuotes(data.results);
      } catch (error) {
        setError(error.message);
      }
    }
    getQuotes();
  }, [city]);

  console.log(quotes);

  return (
    <>
      <div>
        <img src={iconWeather} alt={iconWeather} />
        <h2>{`${city}, ${country}`}</h2>
        <div>
          <p>{temp}</p>
          <div>
            <p>min</p>
            <p>{temp_min}</p>
            <p>max</p>
            <p>{temp_max}</p>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li>{Date.now()}</li>
          <li>{Date.now()}</li>
          <li>{Date.now()}</li>
          <li>{Date.now()}</li>
          <li>{sunrise}</li>
          <li>{sunset}</li>
        </ul>
      </div>
      <div>
        <p>{quotes[0].content}</p>
        <p>{quotes[0].author}</p>
      </div>
    </>
  );
};

export default Home;
