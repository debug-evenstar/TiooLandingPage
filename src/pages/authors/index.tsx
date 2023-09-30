import React from "react";
import PageLayout from "../../layouts/PageLayout";
import Header from "./components/Header";
import Pricings from "./components/Pricing";
function Pricing() {
  return (
    <PageLayout>
      <Header />
      <Pricings />
    </PageLayout>
  );
}

export default Pricing;
