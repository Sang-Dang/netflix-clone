import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import "./header.css";

interface props {
  title: string;
  link: string[];
}
const Header: React.FC<props> = ({ title, link }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log(position)
      if(position > 0) {
        setIsScrolled(true);
      } else {
        setTimeout(() => setIsScrolled(false), 250);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []) 

  const linkFormatted = link.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <section id="header" className={isScrolled ? 'opaque' : ''}>
      <div className="main">
        <h1 className="title">{title}</h1>
        <ul className="links">{linkFormatted}</ul>
      </div>
      <div className="functions">
        <div className="search">
            <FontAwesomeIcon icon={faSearch}/>
        </div>
        <div className="notifications">
            <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="account"></div>
      </div>
    </section>
  );
};

export default Header;
