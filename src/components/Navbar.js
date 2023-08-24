import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
    });
    return () => {
      window.removeEventListener("scroll", []);
    };
  }, []);
  return (
    <div className={`nav ${show && `nav-black`}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
        className="netflix_logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="avatar logo"
        className="avatar_logo"
      />
    </div>
  );
}

export default Navbar;
