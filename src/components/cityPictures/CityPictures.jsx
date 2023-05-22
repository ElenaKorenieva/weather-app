import { useSetLocation } from "context/LocationProvider";
import React from "react";
import s from "./CityPictures.module.scss";
import QoutesItem from "components/QuotesItem/QuotesItem";

const CityPictures = () => {
  const { pictureBg } = useSetLocation();

  return (
    <div className={s.picturesContainer}>
      <div
        style={{
          backgroundImage: `url(${pictureBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className={s.quotesContainer}>
        <QoutesItem />
      </div>
    </div>
  );
};

export default CityPictures;
