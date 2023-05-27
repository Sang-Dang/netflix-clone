import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faSun } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { ThemeContext } from "../../../util/ThemeContext";

interface props {
  title: string;
}
const Header: React.FC<props> = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {isDark, toggle, getDarkClass: getDarkClass} = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log(position);
      if (position > 0) {
        setIsScrolled(true);
      } else {
        setTimeout(() => setIsScrolled(false), 250);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="header" className={getDarkClass(isScrolled ? "opaque" : "")}>
      <div className="main">
        <h1 className="title">{title}</h1>
        <ul className="links">
          <li key="h-home">Home</li>
          <li key="h-tv-shows">TV Shows</li>
          <li key="h-movies">Movies</li>
          <li key="h-new">New & Popular</li>
        </ul>
      </div>
      <div className="functions">
        <button className="switch-theme button" onClick={toggle}>
          <FontAwesomeIcon icon={faSun} />
        </button>
        <button className="search button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="notifications button">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <div className="account"></div>
      </div>
    </section>
  );
};

export default Header;
