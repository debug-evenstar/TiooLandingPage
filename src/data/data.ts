import {
  BenefitCustomCardprop,
  navData,
  pricingDataP,
  schoolDataP,
} from "../types/types";

import ai from "../images/homeimg/ai.png";
import lib from "../images/homeimg/library.png";
import inter from "../images/homeimg/interactive.png";
export const NAV_DATA: navData[] = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/library", text: "Library" },
  { id: 3, url: "/authors", text: "Authors" },
  { id: 4, url: "/pricing", text: "Pricing" },
];
export const benefitData: BenefitCustomCardprop[] = [
  {
    title: "AI-Powered Learning",
    img: ai,
    desc: "Tioo leverages artificial intelligence to personalize and enhance your child’s educational experiences. ",
    col: 1,
  },
  {
    title: "Extensive  Library",
    img: lib,
    desc: "Our extensive textbook library provides access to a wide range of educational books and materials, offering diverse learning opportunities. ",
    col: 2,
  },
  {
    title: "Interactive Workbooks",
    img: inter,
    desc: "Our platform engages kids through workbooks, games, and interactive activities. It provides instant feedback, adapts to their skill level, and makes learning fun.",
    col: 3,
  },
];

export const SchoolData: schoolDataP[] = [
  {
    id: 1,

    title: "Become a pacesetter",
    desc: "Set your school apart and become a trailblazer with Tioo by utilizing our functionalities to enhance students’ learning experience.",
  },
  {
    id: 2,

    title: "Increase student retention",
    desc: "Interactive textbooks and workbooks improve students’ engagement and participation, increasing retention by over 60% ",
  },
  {
    id: 3,

    title: "Vast curriculum",
    desc: "Gain access to an extensive range of educational subjects. This breadth of curriculum options will allow your schools to cater to various learning styles.",
  },
];

export const pricingData: pricingDataP[] = [
  {
    id: 1,

    amount: "₦ 8,000",
    time: "/month",
    level: "Starter",
    level_desc: "Early coding for kids",
    list: [
      "AI tutoring",
      "Unlimited answers to exercises and activities",
      "Video lessons",
      "Coaching from authors",
      "Q&A",
    ],
    availability: "(coming soon)",
    tip: "",
    tip_desc: "",
  },
  {
    id: 2,

    amount: "₦ 12,000",
    time: "/month",
    level: "Starter",
    level_desc: "Early coding for kids",
    list: [
      "AI tutoring",
      "Unlimited answers to exercises and activities",
      "Video lessons",
      "Coaching from authors",
      "Q&A",
    ],
    availability: "(coming soon)",
    tip: "6,000",
    tip_desc: "/month | save ₦ 12,000",
  },
  {
    id: 1,

    amount: "₦ 36,000",
    time: "/month",
    level: "Starter",
    level_desc: "Early coding for kids",
    list: [
      "AI tutoring",
      "Unlimited answers to exercises and activities",
      "Video lessons",
      "Coaching from authors",
      "Q&A",
    ],
    availability: "(coming soon)",
    tip: "36,000 ",
    tip_desc: "/month | save ₦ 60,000",
  },
];
