import React, { useContext, useState } from "react";
import {
  CircleMainButton,
  CircleSecondaryButton,
} from "../common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faThumbsUp,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./FilmCard.css";
import { ThemeContext } from "../../util/ThemeContext";
import { getOpenHandler } from "../FilmInfoPopup/FilmInfoPopup";

interface props {
  movie: any;
  infoHandler: Function;
}

const FilmCard: React.FC<props> = ({ movie, infoHandler }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useContext(ThemeContext);

  function handleMouseEnter() {
    setTimeout(() => setIsHovered(true), 300);
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setTimeout(() => {
      setIsHovered(false);
    }, 800);
  }

  function handleShowInfo() {
    getOpenHandler("info")
    infoHandler(movie)
  }

  return (
    <div
      className={
        "filmCard " + (isHovered ? "hovered " : " ") + (isDark ? "dark " : " ")
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="imageContainer">
        <img src={movie.img} alt={movie.title} />
      </div>
      <div className="info">
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
          <CircleSecondaryButton
            handler={handleShowInfo}
            icon={<FontAwesomeIcon icon={faChevronUp} />}
          />
        </div>
        <h3 className="title">{movie.title}</h3>
      </div>
    </div>
  );
};

export default FilmCard;
