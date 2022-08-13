import React from "react";
import Navbar from "../navigation/navbar";
import Hero from "../hero/hero";
import Trial from "../trial/trial"
import CustomizedVideoSection from "../customizedVideoSection/customizedVideoSection";
import Numbers from "../numbers/numbers"
import Portfolio from "../portfolio/portfolio";
import Process from "../process/process";
import BestInvestment from "../bestInvestment/bestInvestment";
import Clients from "../clients/clients";
import Testimonials from "../testimonials/testimonials";
import Footer from "../footer/footer";
import Faqs from "../faqs/faqs";

import {
  layout,
} from "./layout.module.css";

const Layout = () => {
  return (
    <div className={layout}>
      <Navbar/>
      <main>
       <Hero/>
       <Trial/>
       <CustomizedVideoSection/>
       <Portfolio/>
       <Process/>
       <BestInvestment/>
       <Clients/>
       <Testimonials/>
       <Faqs/>
       <Footer/>
      </main>
    </div>
  );
};
export default Layout;