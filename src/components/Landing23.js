import React, { useContext } from "react";
import Footer from "./Footer23";
// import Header from "./Header";
import Hero from "./Hero23";
import Results from "./Results23";
import Summary from "./Summary23";
import { AppContext } from "../contexts/App";

function Landing() {
  const { aboutPageVisible } = useContext(AppContext);

  return (
    <>
      
        <Hero />
        <Summary />
        <Results />
      <Footer />
    </>
  );
}

export default Landing;
