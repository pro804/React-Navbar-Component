import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsPinterest } from "react-icons/bs";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "/profile",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://x.com/",
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/",
    icon: <IoLogoLinkedin />,
  },
  {
    id: 4,
    url: "http://gr.pinterest.com/",
    icon: <BsPinterest />,
  },
];
