/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./Popup.css";
import { ThemeContext } from "../../../util/ThemeContext";

interface props {
  id: string;
  children: React.ReactNode;
}

const Popup: React.FC<props> = ({ id, children }) => {

  const { getDarkClass } = useContext(ThemeContext);

  function handleClose() {
    const element = document.getElementById(id);
    if(element !== null) {
      element.classList.remove("open")
    }
    document.body.style.overflow = 'visible';
  }

  return (
    <div className={getDarkClass("popup")} id={id}>
      <div className="overlay" onClick={handleClose}></div>
      <div className="main">
        <a className="close" onClick={handleClose}>
          <FontAwesomeIcon icon={faClose} />
        </a>
        {children}
      </div>
    </div>
  );
};

export default Popup;
