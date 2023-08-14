import {
  InstructionDatatype,
  BenefitDataTypes,
  GradeDataTypes,
  NavDataTypes,
  OFFER,
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
import t1 from "../pages/home/sections/topics/image/t1.png";
import t2 from "../pages/home/sections/topics/image/t2.png";
import t3 from "../pages/home/sections/topics/image/t3.png";
import time from "../pages/schools/sections/offer/image/time.png";
import creative from "../pages/schools/sections/offer/image/creative.png";
import workload from "../pages/schools/sections/offer/image/workload.png";
import tiooimg1 from "../pages/schools/sections/whytioo/image/img1.png";
import tiooimg2 from "../pages/schools/sections/whytioo/image/img2.png";
import tiooimg3 from "../pages/schools/sections/whytioo/image/img3.png";
import tiooimg4 from "../pages/schools/sections/whytioo/image/img4.png";
import tiooimg5 from "../pages/schools/sections/whytioo/image/img5.png";
import whytioo1 from "../pages/schools/sections/whytioo3/image/why1.png";
import whytioo2 from "../pages/schools/sections/whytioo3/image/why2.png";
import whytioo3 from "../pages/schools/sections/whytioo3/image/why3.png";
import whytioo4 from "../pages/schools/sections/whytioo3/image/why4.png";

import schfit1 from "../pages/schools/sections/schoolfit/image/schfit1.png";
import schfit2 from "../pages/schools/sections/schoolfit/image/schfit2.png";
import schfit3 from "../pages/schools/sections/schoolfit/image/schfit3.png";
import img1 from "../pages/schools/sections/howitworks/image/1 (2).png";
import img2 from "../pages/schools/sections/howitworks/image/2 (2).png";
import img3 from "../pages/schools/sections/howitworks/image/3 (2).png";
import img4 from "../pages/schools/sections/howitworks/image/4 (2).png";

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
export const SChoolFitData: BenefitDataTypes[] = [
  {
    id: 1,
    h1: "Monetize your Smart School",
    h2: "",
    p1: "Our platform allows school owners flexibility to upload academic content and outsource these contents to students who are not part of their school for a fee.",

    p2: "By creating and uploading your curriculum on our platform, you open up new revenue streams for your school. Whenever other educational institutions or educators access and utilize your curriculum, you earn a mark-up fee. You help others while generating additional income for your school!",
    img: schfit1,
    rightrender: true,
  },
  {
    id: 2,
    h1: "Repository of Resources ",
    h2: "",
    p1: "Our platform houses an extensive repository of educational resources, including multimedia content, interactive activities, and assessments designed to enrich the learning process. You can integrate these resources into your curriculum to make learning more enjoyable and effective.",

    p2: "Our platform also connects you with a network of subject matter experts and educational content creators. Outsource the development of specialized content and ensure that your students receive the best educational materials possible.",
    img: schfit2,
    rightrender: false,
  },
  {
    id: 3,
    h1: "White Label",
    h2: "",
    p1: "We offer white label service to school owners!! School owners can customize their school and create their platform in ways that are unique to their students.",

    p2: "Wth our White Label Service, your school becomes a canvas for creativity! Inject your unique branding, logo, website and colours to showcase your school's personality and values. Stand out from the crowd and make a lasting impression on your students, parents, and community.",
    img: schfit3,
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
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "",
  },
  {
    id: 3,
    text: "Schools",
    url: "/schools",
  },
  {
    id: 4,
    text: "Educators",
    url: "",
  },
  {
    id: 5,
    text: "Flipped classroom",
    url: "/flippedclass",
  },
  {
    id: 6,
    text: "More",
    url: "",
  },
];

export const offerData: OFFER[] = [
  {
    id: 1,
    title: "Time Saving",
    desc: "Use our AI to avoid long hours of curating lesson notes, test & exam questions, and their marking scheme.",
    img: time,
  },
  {
    id: 2,
    title: "Workload",
    desc: "Proprietors and head teachers wouldn't worry about vetting lesson notes anymore, as AI is more efficient in producing error-free academic content.",
    img: workload,
  },
  {
    id: 3,
    title: "Creative",
    desc: "With our AI, teachers can include content from international curricula, and expose students to diverse mind-stimulating games.",
    img: creative,
  },
];
export const TIOOData: OFFER[] = [
  {
    id: 1,

    desc: "School owners can explore and adopt co-curricula content from educators all over the world. Thereby offering more value to students.",
    img: tiooimg1,
  },
  {
    id: 2,

    desc: "Our platform allows school owners flexibility to upload academic content and outsource these contents to students who are not part of their school for a fee.",
    img: tiooimg2,
  },
  {
    id: 3,

    desc: "The lessons that students access, are displayed in a game-like form making it interactive & interesting, while the AI provides real-time feedback & assistance during the course of learning.",
    img: tiooimg3,
  },
  {
    id: 4,

    desc: "Our AI system also provides advanced analytics on students' performance and informs teachers on challenging areas, preparing them to accommodate different learning needs.",
    img: tiooimg4,
  },
  {
    id: 5,

    desc: "Our AI curates and recommends educational resources such as videos, articles, simulations, and interactive exercises to supplement the pre-class materials. ",
    img: tiooimg5,
  },
];
export const WHYTIOOData: OFFER[] = [
  {
    id: 1,
    title: "Personalized Learning Paths",
    desc: "Our AI algorithms can analyse student performance data and learning styles to recommend tailored pre-class materials based on their strengths, weaknesses, and learning preferences.",
    img: whytioo1,
  },
  {
    id: 2,
    title: "Automated Feedback",
    desc: " Our AI-powered tools can automatically grade assignments completed by students & provide immediate feedback on their performance, allowing students to identify areas for improvement before the in-class session",
    img: whytioo2,
  },
  {
    id: 3,
    title: "Virtual Tutor",
    desc: "An AI tutor has been integrated into the learning platform to answer students' questions, provide explanations, and offer additional support during the pre-class preparation phase.",
    img: whytioo3,
  },
  {
    id: 4,
    title: "Adaptive Learning",
    desc: "Our platform can adjust the difficulty level and content sequence based on each student's progress. This ensures that students are challenged appropriately and continuously engaged with the material.",
    img: whytioo4,
  },
];
export const HowITWorks: OFFER[] = [
  {
    id: 1,
    desc: "Sign up, enter the class, subject, lesson topic, and objectives.",
    img: img1,
  },
  {
    id: 2,
    desc: " Generate activities, notes, and assessments.",
    img: img2,
  },
  {
    id: 3,
    desc: "Print test and exam questions.",
    img: img3,
  },
  {
    id: 4,
    desc: "Students can access lesson slides shared by the teacher on any smart device.",
    img: img4,
  },
];
