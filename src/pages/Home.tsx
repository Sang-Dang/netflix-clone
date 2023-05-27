import React from "react";
import FeaturedContainer from "../containers/FeaturedContainer";
import FilmContainer from "../containers/FilmContainer";
const Home: React.FC = () => {
  return (
    <section id="home" style={{height: "100%", backgroundColor: "black", position: "static"}}>
      <FeaturedContainer />
      <FilmContainer />
    </section>
  );
};

export default Home