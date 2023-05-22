import { useEffect, useState } from "react";
import { getQuotesApi } from "services/apiQuotes";
import s from "./QuotesItem.module.scss";

const QoutesItem = () => {
  const [randomNum, setRandomNum] = useState(0);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function getQuotes() {
      try {
        const data = await getQuotesApi();
        setQuotes(data.results);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    getQuotes();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * (20 - 1)));
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {quotes.length > 0 && (
        <>
          <p className={s.container}>{quotes[randomNum].content}</p>
          <p className={s.container}>{quotes[randomNum].author}</p>
        </>
      )}
    </div>
  );
};

export default QoutesItem;
