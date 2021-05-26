import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="Large" />
      </IconButton>
      <Link to="/">
        <img
          className="header__logo"
          src="https://banner2.cleanpng.com/20180407/yhe/kisspng-tinder-logo-computer-icons-bumble-mango-vector-5ac8b2480862c3.1435527615231022800344.jpg"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="Large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
