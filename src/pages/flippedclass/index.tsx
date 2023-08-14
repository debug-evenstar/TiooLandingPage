import React from "react";
import PageLayout from "../../layouts/PageLayout";
import Navbar from "../home/sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Flipped from "./sections/flipped/Flipped";
import StudentSatisfaction from "./sections/studentsatisfaction/StudentSatisfaction";
import Benefit from "./sections/benefit/Benefit";
import TeacherSay from "./sections/teachersay/TeacherSay";
import Tioofits from "./sections/tioofits/Tioofits";
import Footer from "../home/sections/footer/Footer";

function Flippedclass() {
  return (
    <PageLayout>
      <Navbar />
      <Header />
      <Flipped />
      <StudentSatisfaction />
      <Benefit />
      <TeacherSay />
      <Tioofits />
      <Footer />
    </PageLayout>
  );
}

export default Flippedclass;
