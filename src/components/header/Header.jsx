import React, { useState, useContext, useEffect } from "react";
import "../../styles/Header.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../context/AppContext";
import Auth from "../Auth";
import { TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Header = ({ userAvatar }) => {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState("kg");

  const changeLng = (language) => {
    i18n.changeLanguage(language);
    setActive(language);
  };
  const context = useContext(DataContext);
  console.log(context);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [categories, setCategories] = useState([
    { name: "Plant pots", rout: "plantPots" },
    { name: "Ceramics", rout: "ceramics" },
    { name: "Tables", rout: "tables" },
    { name: "Chairs", rout: "chairs" },
    { name: "Crockery", rout: "crockery" },
    { name: "Tableware", rout: "tableware" },
    { name: "Cutlery", rout: "cutlery" },
  ]);

  const [lngMenuOpen, setLngMenuOpen] = useState(false);

  const toggleLngMenu = () => {
    setLngMenuOpen(!lngMenuOpen);
  };
  return (
    <div className="header">
      {context.user}
      <div className="nav">
        <div>
          <img
            src="./src/assets/search.svg"
            alt=""
            style={{
              marginRight: "16px",
            }}
          />
        </div>
        <NavLink to={"/home"}>
          <h1>Avion</h1>
        </NavLink>
        <div>
          <NavLink to={"/cart"}>
            <img
              src="./src/assets/cart.svg"
              alt=""
              style={{
                marginRight: "16px",
              }}
            />
          </NavLink>
          <img
            src={userAvatar ? userAvatar : "./src/assets/user.svg"}
            onClick={openModal}
          />
          {modalOpen && (
            <div className="auth-modal">
              <div className="auth-modal-content">
                <button className="close-btn" onClick={closeModal}>
                  Close
                </button>
                <Auth />
              </div>
            </div>
          )}
        </div>
      </div>
      <ul className="navList">
        {categories.map((categ) => (
          <li key={categ.rout}>
            <NavLink to={`/${categ.rout}`}>{t(categ.name)}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
