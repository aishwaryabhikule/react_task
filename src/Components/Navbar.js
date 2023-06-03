import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ filterResult, setData, Categories }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
        <nav ref={navRef}>
            <a href="#" onClick={() => filterResult("Men")}>Men</a>
            <a href="#" onClick={() => filterResult("Women")}>Women</a>
            <a href="#" onClick={() => filterResult("Children")}>Children</a>
            <a href="#" onClick={() => filterResult("Black")}>Black</a>
            <a href="#" onClick={() => filterResult("White")}>White</a>
            <a href="#" onClick={() => setData(Categories)}>All</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
    </header>
  );
}

export default Navbar;
