import {
  InstructionDatatype,
  BenefitDataTypes,
  GradeDataTypes,
  NavDataTypes,
} from "../types/types";
import images1 from "../images/1.png";
import images2 from "../images/2.png";
import images3 from "../images/3.png";
import images4 from "../images/4.png";
import varimg from "../images/var.png";
import robot from "../images/robot.png";
import aanal from "../images/aanal.png";
import wtioo from "../images/wtioo.png";
import flcl from "../images/fcl.png";
import grade1 from "../images/grade1.png";
import grade2 from "../images/grade2.png";
import grade3 from "../images/grade3.png";
import t1 from "../pages/sections/topics/image/t1.png";
import t2 from "../pages/sections/topics/image/t2.png";
import t3 from "../pages/sections/topics/image/t3.png";
import { url } from "inspector";

export const InstructionData: InstructionDatatype[] = [
  { id: 1, image: images1, text: "Sign your child up on Tioo " },
  {
    id: 2,
    image: images2,
    text: "Get access to school curriculum and co-curriculum contents ",
  },
  { id: 3, image: images3, text: "Choose a subject and start learning!" },
  {
    id: 4,
    image: images4,
    text: "Enjoy gamified lesson slides and real-time  feedback!",
  },
];

export const BenefitData: BenefitDataTypes[] = [
  {
    id: 1,
    h1: "Premium Content",
    h2: "",
    p1: "Give your child an advantage with the wealth of educational tools at our disposal, from extracurricular lessons like coding, spatial reasoning, puzzles, and spelling bee to curriculum-based subjects relevant to their academics.",
    p2: "",
    img: wtioo,
    rightrender: true,
  },
  {
    id: 2,
    h1: "Immersive and Gamified",
    h2: "",
    p1: "Our lesson content is game-like, smart, and interactive. This makes your child participate fully in the learning process and makes learning fun and interesting.",
    p2: "This is one of the best ways to keep your child learning and learning.",
    img: varimg,
    rightrender: false,
  },
  {
    id: 3,
    h1: "Personalized And Adaptive",
    h2: "",
    p1: "Using AI and game mechanics, our platform makes sure that each child learns in a way that fits their own learning style, pace, and tastes. With this personalized method, the content and activities are made to fit each student’s needs.",
    p2: "",
    img: robot,
    rightrender: true,
  },
  {
    id: 4,
    h1: "Flipped Classroom",
    h2: "",
    p1: "Our platform allows school owners and teachers to implement the flipped classroom approach, which encourages active learning by having students study content before class, which allows for  discussions and problem solving in class.",
    p2: "",
    img: flcl,
    rightrender: false,
  },
  {
    id: 5,
    h1: "Advanced analytics",
    h2: "",
    p1: "Tioo provides real-time feedback and learning recommendations to both parents and teachers to further understand, nurture, and guide the child.",
    p2: "",
    img: aanal,
    rightrender: true,
  },
];

export const GradeData: GradeDataTypes[] = [
  {
    id: 1,
    img: grade1,
    heading: "Nursery",
    text: "Immersive lessons in school curriculum and extra curriculum to provide the ideal academic start.",
  },
  {
    id: 2,
    img: grade2,
    heading: "Primary",
    text: "Lessons in Mathematics, English, Basic Science, and Technology that are simple to understand to help your youngster solve problems like a pro.",
  },
  {
    id: 3,
    img: grade3,
    heading: "Secondary",
    text: "Learn challenging ideas through simplified lessons in Mathematics, English, Science, Arts, and Commercials.",
  },
];
export const TopicsData: GradeDataTypes[] = [
  {
    id: 1,
    img: t2,
    heading: "Get the App",
    text: "And enjoy access to diverse curriculum and a seamless learning flow",
  },
  {
    id: 2,
    img: t1,
    heading: "Own a smart school",
    text: "Educational institutions can own a smart school by uploading their curriculum on our platform and giving access to students. ",
  },
  {
    id: 3,
    img: t3,
    heading: "Become an educator",
    text: "With the help of AI, you can create and design lessons with our vast resources and earn passive income when you publish them on our marketplace.",
  },
];

export const NavData: NavDataTypes[] = [
  {
    id: 1,
    text: "Home",
    url: "",
  },
  {
    id: 2,
    text: "About",
    url: "",
  },
  {
    id: 3,
    text: "Schools",
    url: "",
  },
  {
    id: 4,
    text: "Educators",
    url: "",
  },
  {
    id: 5,
    text: "Flipped classroom",
    url: "",
  },
  {
    id: 6,
    text: "More",
    url: "",
  },
];
