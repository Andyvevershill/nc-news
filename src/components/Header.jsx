import React from "react";
import SearchBar from "./SearchBar";
import Account from "./Account";
import Navigator from "./Navigator";
import { Link, useNavigate } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faNewspaper);

const Header = ({ setSearch }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setSearch("");
    navigate("/");
  };

  return (
    <header className="header">
      <Link to="/" onClick={handleHomeClick}>
        <FontAwesomeIcon icon="fa-newspaper" className="header-image" />
      </Link>

      <div className="header-centre">
        <h1 className="header-text">Welcome to NC News</h1>
        <SearchBar setSearch={setSearch} />
        <Navigator className="navigator" />
      </div>

      <Link to="/users/grumpy19">
        <Account className="header-Account" />
      </Link>
    </header>
  );
};

export default Header;
