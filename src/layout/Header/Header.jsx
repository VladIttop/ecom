import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../components/Firebase/auth";
import "./header.scss";

import searchIcon from "../../assets/icons/search.png";
import cartIcon from "../../assets/icons/cart.png";
import profileIcon from "../../assets/icons/profile.png";

function Header() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchRef = useRef(null);
  const searchIconRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  const handleProfileClick = async (e) => {
    if (userLoggedIn) {
      e.preventDefault(); 
      try {
        await doSignOut();
        navigate("/signup");
      } catch (err) {
        console.error("Failed to log out:", err);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen) {
        if (
          searchRef.current &&
          !searchRef.current.contains(event.target) &&
          searchIconRef.current &&
          !searchIconRef.current.contains(event.target)
        ) {
          setIsSearchOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-left">
          <div
            className={`burger-menu ${isMenuOpen ? "burger-menu--active" : ""}`}
            onClick={toggleMenu}
          ></div>
          
          <Link to="/" className="header__logo">
            SHOP.CO
          </Link>
          
          <nav className={`header-nav ${isMenuOpen ? "header-nav--active" : ""}`}>
            <ul>
              <li>
                <Link to="/Shop" className="header-nav__link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/sale" className="header-nav__link">
                  On Sale
                </Link>
              </li>
              <li>
                <Link to="/arrivals" className="header-nav__link">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/Brands" className="header-nav__link">
                  Brands
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <div className="header-icons">
            <img
              ref={searchIconRef}
              onClick={toggleSearch}
              className="header-icons__icon"
              src={searchIcon}
              alt="Search"
            />
            <Link to="/cart">
              <img className="header-icons__icon" src={cartIcon} alt="Cart" />
            </Link>
            <Link to={userLoggedIn ? "#" : "/signup"} onClick={handleProfileClick}>
              <img
                className="header-icons__icon"
                src={profileIcon}
                alt={userLoggedIn ? "Log Out" : "Profile"}
                style={{ filter: userLoggedIn ? "hue-rotate(120deg) saturate(1.5)" : "none" }}
              />
            </Link>
          </div>

          <div
            ref={searchRef}
            className={`header-search ${isSearchOpen ? "header-search--active" : ""}`}
          >
            <input
              type="text"
              placeholder="Search for products..."
              className="header-search__input"
            />
            <button className="header-search__button">Search</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;