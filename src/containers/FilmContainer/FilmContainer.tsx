import React from "react";
import FilmCard from "../../components/FilmCard/FilmCard";
import "./FilmContainer.css";

const FilmContainer: React.FC = () => {
  return (
    <section className="filmContainer">
      <h3 className="title">Featured Films</h3>
      <div className="films">
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      <FilmCard
        imageURL="https://www.startrek.com/sites/default/files/images/2023-02/STP-S3-KeyArt-1920x1080.jpg"
        title="Star Trek Picard"
      />
      </div>
    </section>
  );
};

export default FilmContainer;
