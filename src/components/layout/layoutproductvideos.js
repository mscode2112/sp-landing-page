import React from "react";
import Navbar from "../navigation/navbar";
import Hero from "../hero/hero";
import Portfolio from "../portfolio/portfolio";
import Clients from "../clients/clients";
import Footer from "../footer/footer";

import { layout } from "./layout.module.css";

const LayoutProductVideos = () => {
  return (
    <div className={layout}>
      <Navbar />
      <main>
        <Hero />
        <BestInvestment />
        <Portfolio />
        <Clients />
        <Footer />
      </main>
    </div>
  );
};
export default LayoutProductVideos;
