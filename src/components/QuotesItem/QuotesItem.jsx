import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const QoutesItem = ({ data }) => {
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * (20 - 1)));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <>
          <p>{data[randomNum].content}</p>
          <p>{data[randomNum].author}</p>
        </>
      )}
    </div>
  );
};

export default QoutesItem;

QoutesItem.propTypes = {
  data: PropTypes.array,
};
