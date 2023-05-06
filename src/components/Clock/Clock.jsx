import { useEffect, useState } from "react";
import { formatClock } from "utils/formatDate";

let date = new Date().toJSON();
const currentTime = formatClock(date);

const Clock = () => {
  const [timer, setTimer] = useState(currentTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      date = new Date().toJSON();
      setTimer(formatClock(date));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>{timer}</div>;
};

export default Clock;
