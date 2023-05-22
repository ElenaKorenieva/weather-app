import Clock from "components/Clock/Clock";
import React from "react";
import s from "./TodayData.module.scss";
import {
  formatDayOfMonth,
  formatShortDayOfWeek,
  formatMonth,
} from "utils/formatDate";

const TodayData = () => {
  const date = new Date().toJSON();
  return (
    <div className={s.listContainer}>
      <ul className={s.listWrapper}>
        <li>
          <Clock />
        </li>
        <li>
          {`${formatShortDayOfWeek(date)} ${formatDayOfMonth(
            date
          )} ${formatMonth(date)}`}
        </li>
      </ul>
    </div>
  );
};

export default TodayData;
