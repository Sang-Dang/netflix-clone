import React, { useContext, useState } from "react";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmList.css";
import { ThemeContext } from "../../util/ThemeContext";
import FilmInfoPopup from "../FilmInfoPopup/FilmInfoPopup";

interface props {
  movieDatabase: any[];
}

const FilmList: React.FC<props> = ({ movieDatabase }) => {
  const [movies, setMovies] = useState(movieDatabase);
  const [currentMovie, setCurrentMovie] = useState<any>(movieDatabase[0]);
  const { getDarkClass } = useContext(ThemeContext);

  const generateMovies = movies.map((movie) => {
    return (
      <FilmCard key={movie.id} movie={movie} infoHandler={setCurrentMovie} />
    );
  });

  return (
    <>
      <section className={getDarkClass("filmList")}>
        <h3 className="title">Featured Films</h3>
        <div className="films">{generateMovies}</div>
      </section>
      <FilmInfoPopup currentMovie={currentMovie} id="info"/>
    </>
  );
};

export default FilmList;
