import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item menu">
        Stream
      </Link>
      <Link to="/" className="right menu item">
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  );
};

export default Header;
