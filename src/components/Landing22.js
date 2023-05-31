import React, { useContext } from "react";
import Footer from "./Footer22";
// import Header from "./Header";
import Hero from "./Hero22";
import Results from "./Results22";
import Summary from "./Summary22";
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
