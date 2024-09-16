import React from "react";
import SearchBar from "./SearchBar";
import Account from "./Account";
import Navigator from "./Navigator";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="header-image" src="news-logo.png" alt="logo" />
      </a>
      <div className="header-centre">
        <SearchBar />
        <Navigator className="navigator" />
      </div>
      <a href="">
        <Account className="header-Account" />
      </a>
    </header>
  );
};

export default Header;
