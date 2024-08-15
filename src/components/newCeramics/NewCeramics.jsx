import React, { useContext } from "react";
import { DataContext } from "../../context/AppContext";
import Card from "../card/Card";
import "./NewCeramics.css";
import { useTranslation } from "react-i18next";

const NewCeramics = () => {
  const { t } = useTranslation();
  const context = useContext(DataContext);
  const { products } = context;
  console.log(products.slice(0, 4));
  return (
    <div className="newCeramics">
      <h2>{t("New ceramics")}</h2>
      <div className="cards">
        {products.slice(0, 4).map((el) => (
          <Card {...el} />
        ))}
      </div>
      <div className="button-div">
        <button>{t("View collection")}</button>
      </div>
    </div>
  );
};

export default NewCeramics;
