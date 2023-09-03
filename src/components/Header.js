import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../assets/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navWrapper">
        <div className="Keeplogo">
            <button  className="hamburgerIcon">
          <MenuOutlinedIcon /></button>
          <img src={logo} alt="Keep Logo" />
          <span>Keep</span>
        </div>
        <div className="searchBoxAndIcons">
          <div className="search-box">
            <div className="inputSearchBox">
                <span className="searchIcon">
              <SearchOutlinedIcon />
              </span>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="navbar-icons">
          <button className="refreshIcon"
            ><RefreshIcon /></button>
            <button className="listView"><ViewAgendaOutlinedIcon /></button>
            
            <button className="settings"><SettingsOutlinedIcon /></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
