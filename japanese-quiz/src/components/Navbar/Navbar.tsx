import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setOverlayActive(isOpen);
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        {!isOpen && (
          <button
            className="hamburger"
            onClick={toggleSidebar}
            ref={hamburgerRef}
          >
            &#9776;
          </button>
        )}
      </nav>
      <div
        className={`overlay ${overlayActive ? "active" : ""}`}
        ref={overlayRef}
      ></div>
      <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Quiz!
            </Link>
          </li>
          <li>
            <Link to="/hiragana" onClick={toggleSidebar}>
              Impara l'hiragana
            </Link>
          </li>
          <li>
            <Link to="/katakana" onClick={toggleSidebar}>
              Impara il katakana
            </Link>
          </li>
          <li>
            <Link to="/kanji" onClick={toggleSidebar}>
              Impara i kanji
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
