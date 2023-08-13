import { BenefitDataTypes, OFFER } from "../../../types/types";
import flimg1 from "../sections/flipped/images/flimg1.png";
import flimg2 from "../sections/flipped/images/flimg2.png";
import flimg3 from "../sections/flipped/images/flimg3.png";
import b1 from "../sections/benefit/images/b1.png";
import b2 from "../sections/benefit/images/b2.png";
import b3 from "../sections/benefit/images/b3.png";
import apos from "../sections/teachersay/images/appos.png";

export const flippedData: OFFER[] = [
  {
    id: 1,
    title: "Flexibility and Personalization",
    desc: "Students can access pre-recorded video lectures or reading materials outside of class, allowing them to learn at their own pace and review content as needed. Teachers can personalize their approach by providing targeted support to individual students during in-person sessions.",
    img: flimg1,
  },
  {
    id: 2,
    title: "Increased Student Engagement",
    desc: "By shifting lessons to pre-class work, students are better prepared to discuss and delve into the subject matter during class. This increased engagement can lead to a more dynamic learning environment.",
    img: flimg2,
  },
  {
    id: 3,
    title: "Teacher-Student Interaction",
    desc: "With more time available during class, teachers can interact individually with students, providing personalized feedback, addressing questions, and tailoring instruction to meet specific learning needs.",
    img: flimg3,
  },
];

export const benefitData: BenefitDataTypes[] = [
  {
    id: 1,
    h1: "Active Learning",
    p1: "The flipped classroom empowers students to become more independent and self-directed learners. It can cater to a variety of learning styles, fostering a positive and supportive learning environment where students can thrive academically.",
    img: b1,
    rightrender: true,
  },
  {
    id: 2,
    h1: "Real-world Application",
    p1: "The flipped classroom often emphasizes problem-solving and practical application of knowledge. This prepares students for real-world challenges and situations beyond rote memorization.",
    img: b2,
    rightrender: false,
  },
  {
    id: 3,
    h1: "Better Understanding",
    p1: "Students have the opportunity to study the foundational content beforehand, so they come to class with some background knowledge. This allows them to ask clarifying questions, leading to a deeper understanding of the subject matter.",
    img: b3,
    rightrender: true,
  },
];
export const teacherData: OFFER[] = [
  {
    id: 1,
    title:
      "The flipped classroom increases learning performance and allows us to use class time more efficiently because students receive a taste of the topic beforehand and come to class more prepared by watching video lectures at home.",
    desc: "Student teacher perception of flipped classroom in EFL teacher education",
    img: apos,
  },
  {
    id: 2,
    title:
      "The flipped classroom approach of teaching allows us to spend less time explaining simple subject and more time on deeper learning, allowing us to spend class time on debates and reflections. ",
    desc: "Student teacher perception of flipped classroom in EFL teacher education",
    img: apos,
  },
  {
    id: 3,
    title:
      "The flipped classroom approach gives us teachers more flexibility in the course because we can work at our own pace, choose when and where to complete out-of-class exercises, and pause or rewind video courses as many times as we need.",
    desc: "Student teacher perception of flipped classroom in EFL teacher education",
    img: apos,
  },
];
