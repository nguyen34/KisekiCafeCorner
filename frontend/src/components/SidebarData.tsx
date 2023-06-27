import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Content",
    path: "/content-creation",
    icon: <IoIcons.IoLogoTwitch />,
    cName: "nav-text",
  },
  {
    title: "Recipes",
    path: "/recipes",
    icon: <BiIcons.BiFoodMenu />,
    cName: "nav-text",
  },
  {
    title: "Library",
    path: "/library",
    icon: <BiIcons.BiLibrary />,
    cName: "nav-text",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <AiIcons.AiFillProject />,
    cName: "nav-text",
  },
  {
    title: "Karaoke",
    path: "/karaoke",
    icon: <TbIcons.TbMicrophone2 />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiFillContacts />,
    cName: "nav-text",
  },
];
