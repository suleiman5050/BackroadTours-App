import tour1 from "../images/images/tour-1.jpeg";
import tour2 from "../images/images/tour-2.jpeg";
import tour3 from "../images/images/tour-3.jpeg";
import tour4 from "../images/images/tour-4.jpeg";
import tour5 from "../images/images/tour-5.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-linkedin" },
  { id: 4, href: "https://www.twitter.com", icon: "fab fa-youtube" },
  { id: 5, href: "https://www.twitter.com", icon: "fab fa-discord" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    heading: "saving money",

    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    heading: "Endless Hiking",

    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    heading: "amazing comfort",

    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const Tour = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "august 26th, 2020",
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
    location: "indonesia",
    duration: 8,
    cost: 4000,
  },
  {
    id: 3,
    image: tour3,
    date: "august 26th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "august 26th, 2020",
    title: "Kenya Highlight",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
    location: "kenta",
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: "august 26th, 2020",
    title: "Nigeria Highlight",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque    vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
    location: "Nigeria",
    duration: 20,
    cost: 300,
  },
];
