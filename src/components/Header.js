/** @format */

import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "./StateProvider";
// import { SearchIcon } from "@material-ui/icons/Search";
const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
          className="header_avatar"
        />
        <AccessTime />
      </div>
      <div className="header__search">
        <Search />
        <input type="text" placeholder="search web development" />
      </div>
      <div className="header__right">
        <HelpOutline />{" "}
      </div>
    </div>
  );
};

export default Header;
