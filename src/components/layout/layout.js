import React from "react";
import Navbar from "../navigation/navbar";
import Hero from "../hero/hero";
import Numbers from "../numbers/numbers"
import CustomVideo from "../customvideo/customvideo";
import Portfolio from "../portfolio/portfolio";
import Process from "../process/process";
import BestInvestment from "../bestInvestment/bestInvestment";
import Clients from "../clients/clients";
import Testimonials from "../testimonials/testimonials";
import Footer from "../footer/footer";

import {
  layout,
} from "./layout.module.css";

const Layout = () => {
  return (
    <div className={layout}>
      <Navbar/>
      <main>
       <Hero/>
       <Numbers/>
       <CustomVideo/>
       <Portfolio/>
       <Process/>
       <BestInvestment/>
       <Clients/>
       <Testimonials/>
       <Footer/>
      </main>
    </div>
  );
};
export default Layout;