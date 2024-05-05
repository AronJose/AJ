import React from "react";
import Home from "../Home";
import Protfolio from "../Protfolio";
import ContactMe from "../ContactMe";
import AboutUs from "../AboutUs";

function Public() {
  return (
    <div className="sm:px-6 ">
      <Home />
      <div className="mt-12">
        <AboutUs />
      </div>
      <div className="mt-12">
        <Protfolio />
      </div>
      <div className="mt-12">
        <ContactMe />
      </div>
    </div>
  );
}

export default Public;
