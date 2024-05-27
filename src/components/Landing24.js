import React, { useContext } from "react";
// import Header from "./Header";
import Hero from "./Hero24";
import Results from "./Results24";
import Summary from "./Summary24";
import Footer from "./Footer24";
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
