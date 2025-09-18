import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../src/logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className="nav-center">
        <img src={logo} className="logo" alt="logo"></img>
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
      {showLinks && (
        <div className="links-container">
          <ul className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
