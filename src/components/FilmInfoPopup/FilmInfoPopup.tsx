import React, { useEffect } from "react";
import Popup from "../common/Popup/Popup";
import { faPlay, faPlus, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CircleMainButton,
  CircleSecondaryButton,
} from "../common/Button/Button";
import "./FilmInfoPopup.css";

interface props {
  currentMovie: any;
  id: string;
}

const FilmInfoPopup: React.FC<props> = ({ currentMovie, id }) => {
  return (
    <Popup id={id}>
      <img className="banner" src={currentMovie.img} alt={currentMovie.name} />
      <div className="functions">
        <CircleMainButton
          handler={() => alert("HELOLO")}
          icon={<FontAwesomeIcon icon={faPlay} />}
        />
        <CircleSecondaryButton
          handler={() => alert("HECLLO")}
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
        <CircleSecondaryButton
          handler={() => alert("HECLLO")}
          icon={<FontAwesomeIcon icon={faThumbsUp} />}
        />
      </div>
      <h2 className="title">{currentMovie.title}</h2>
      <p className="release">{currentMovie.release}</p>
      <p className="description">{currentMovie.description}</p>
    </Popup>
  );
};

export const getOpenHandler: Function = (id: string) => {
  const element = document.getElementById(id);
  if (element !== null) {
    element.classList.add("open");
  }
  document.body.style.overflow = "hidden";
};

export default FilmInfoPopup;
