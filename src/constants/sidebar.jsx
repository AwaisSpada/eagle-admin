import { RxDashboard } from "react-icons/rx";
import {
  MdOutlinePermMedia,
  MdOutlineLocalMovies,
  MdOutlineLiveTv,
  MdPerson4,
  MdOutlineSubscriptions,
  MdOutlineRunningWithErrors,
  MdOutlineReviews,
  MdErrorOutline,
} from "react-icons/md";
import { LuTvMinimalPlay } from "react-icons/lu";
import { TbDeviceTvOldFilled } from "react-icons/tb";
import { PiSquareSplitVerticalLight } from "react-icons/pi";
import { CiVideoOn, CiSettings } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { IoIosPerson, IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaRegUser, FaTable, FaQuestionCircle } from "react-icons/fa";
import { VscSymbolConstant } from "react-icons/vsc";
import { RiPageSeparator } from "react-icons/ri";

const sidebarData = [
  {
    title: "MAIN",
    items: [
      { title: "Dashboard", path: "/", icon: <RxDashboard /> },
      {
        title: "Media Library",
        path: "/media-library",
        icon: <MdOutlinePermMedia />,
      },
    ],
  },
  {
    title: "MEDIA MANAGEMENT",
    items: [
      // { title: "Genres", path: "/genres", icon: <PiMaskHappy /> },
      { title: "Movies", path: "/movies", icon: <MdOutlineLocalMovies /> },
      {
        title: "TV Shows",
        icon: <MdOutlineLiveTv />,
        children: [
          { title: "TV Shows", path: "/tv-shows", icon: <LuTvMinimalPlay /> },
          { title: "Seasons", path: "/seasons", icon: <TbDeviceTvOldFilled /> },
          {
            title: "Episodes",
            path: "/episodes",
            icon: <PiSquareSplitVerticalLight />,
          },
        ],
      },
      { title: "Videos", path: "/videos", icon: <CiVideoOn /> },
      // { title: "Live TV", path: "/live-tv", icon: <MdLiveTv /> },
      {
        title: "Cast & Crew",
        icon: <IoPeople />,
        children: [
          { title: "Actors", path: "/actors", icon: <IoIosPerson /> },
          { title: "Directors", path: "/directors", icon: <MdPerson4 /> },
        ],
      },
    ],
  },
  {
    title: "SUBSCRIPTION",
    items: [
      {
        title: "Subscriptions",
        path: "/subscriptions",
        icon: <MdOutlineSubscriptions />,
      },
      { title: "Plans", path: "/plans", icon: <AiOutlineMenuUnfold /> },
      { title: "Plan Limits", path: "/plan-limits", icon: <MdErrorOutline /> },
    ],
  },
  {
    title: "USERS",
    items: [
      { title: "Users", path: "/users", icon: <FaRegUser /> },
      {
        title: "Soon-To-Expire",
        path: "/soon-to-expire",
        icon: <MdOutlineRunningWithErrors />,
      },
      { title: "Reviews", path: "/reviews", icon: <MdOutlineReviews /> },
    ],
  },
  {
    title: "SYSTEM SETTINGS",
    items: [
      { title: "App Banner", path: "/app-banner", icon: <FaTable /> },
      { title: "Constants", path: "/constants", icon: <VscSymbolConstant /> },
      { title: "Settings", path: "/settings", icon: <CiSettings /> },
      {
        title: "Notifications",
        path: "/notifications",
        icon: <IoIosNotificationsOutline />,
      },
      { title: "Pages", path: "/pages", icon: <RiPageSeparator /> },
      { title: "FAQ", path: "/faq", icon: <FaQuestionCircle /> },
    ],
  },
];

export default sidebarData;
