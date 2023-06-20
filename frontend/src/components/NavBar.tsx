import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import "../css/components/NavBar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { useSelector } from "react-redux";

const NavBar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const pageHeader = useSelector((state: any) => state.app.pageHeader);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="nav-bar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h1 className="mx-auto">{pageHeader}</h1>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="w-full">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
