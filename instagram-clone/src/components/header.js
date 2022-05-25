import "../style/header.css";
import { AiOutlineSearch, AiOutlinePlusCircle } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri";
import { BsFillHouseFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

import { IconContext } from "react-icons";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <img
          className="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Logo-Instagram"
        />
        <div className="input-fake">
          <IconContext.Provider value={{ color: "#8e8e8e" }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          <input placeholder="Search" />
        </div>
        <div className="menu-icons">
          <IconContext.Provider value={{ size: "26px" }}>
            <div>
              <BsFillHouseFill />
            </div>
            <div>
              <RiMessengerFill />
            </div>
            <div>
              <AiOutlinePlusCircle />
            </div>
            <div>
              <MdOutlineExplore />
            </div>
            <div>
              <FiHeart />
            </div>
          </IconContext.Provider>
          <img
            className="profile-image"
            src="https://www.personality-database.com/profile_images/23415.png"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
}
