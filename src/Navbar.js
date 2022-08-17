import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://static.miraheze.org/closinglogosgroupwiki/thumb/5/52/Prime_Time_Video.png/400px-Prime_Time_Video.png"
        alt="Prime Time Logo"
      />

      <img
        className="nav__avatar"
        src="https://avatars.githubusercontent.com/u/6759280?v=4"
        alt="Profile Avatar"
      />
    </div>
  );
}

export default Navbar;
