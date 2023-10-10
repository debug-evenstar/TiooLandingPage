import React from "react";
import PageLayout from "../../layouts/PageLayout";
import Header from "./components/Header";
import Pricings from "./components/Pricing";
function Pricing() {
  return (
    <PageLayout>
      <Header />
      <Pricings />
      <div className="mt-10 p-5 rounded-[8px] shadow-xl w-[70%] mx-auto">
        <p className="text-center text-4xl  text-primary font-[700] font-inter">
          Don't worry you don't have to pay for each child, one subscription covers all your children.
        </p>
      </div>
    </PageLayout>
  );
}

export default Pricing;
