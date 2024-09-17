import React from "react";
import SearchBar from "./SearchBar";
import Account from "./Account";
import Navigator from "./Navigator";
import { Link } from "react-router-dom";
import { useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faNewspaper);

const Header = ({ setSearch }) => {
  return (
    <header className="header">
      <Link to="/">
        <FontAwesomeIcon icon="fa-newspaper" className="header-image" />
      </Link>

      <div className="header-centre">
        <SearchBar setSearch={setSearch} />
        <Navigator className="navigator" />
      </div>

      <Link to="/users/butter_bridge">
        <Account className="header-Account" />
      </Link>
    </header>
  );
};

export default Header;
