import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import { Button2 } from "../../components/Ui/Button";
import Demo from "./component/Demo";
import Benefit from "./component/Benefit";
import Schools from "./component/Schools";
import Aboutus from "./component/Aboutus";
import FAQ from "./component/FAQ";
import Header from "./component/Header";

function Homes() {
  return (
    <PageLayout>
      <Header />
      <Demo />
      <Benefit />
      <Schools />
      <Aboutus />
      <FAQ />
    </PageLayout>
  );
}

export default Homes;
