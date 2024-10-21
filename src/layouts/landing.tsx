import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./partials/nav";
import Footer from "./partials/footer";
export default function LandingLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
