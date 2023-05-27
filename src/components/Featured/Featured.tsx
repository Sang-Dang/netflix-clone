import React, { useContext } from "react";
import { MainButton, SecondaryButton } from "../common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./Featured.css";
import { ThemeContext } from "../../util/ThemeContext";
import FilmInfoPopup, { getOpenHandler } from "../FilmInfoPopup/FilmInfoPopup";

interface props {
  movie:any
}

const Featured: React.FC<props> = ({ movie }) => {
  const { getDarkClass } = useContext(ThemeContext);

  function handleShowInfo() {
    getOpenHandler("featuredInfo")
  }

  return (
    <>
      <div className={getDarkClass("featured")}>
        <div className="image-container">
          <img src={movie.img} alt={movie.title} />
        </div>
        <div className="caption">
          <h1 className="title">{movie.title}</h1>
          <p className="description">{movie.description}</p>
          <div className="functions">
            <MainButton handler={() => alert("PLAY")}>
              <FontAwesomeIcon icon={faPlay} color="black" />
              Play
            </MainButton>
            <SecondaryButton handler={handleShowInfo}>
              <FontAwesomeIcon icon={faCircleInfo} color="white" />
              More info
            </SecondaryButton>
          </div>
        </div>
      </div>
      <FilmInfoPopup currentMovie={movie} id="featuredInfo"/>
    </>
  );
};

export default Featured;
