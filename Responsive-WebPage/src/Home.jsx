import React from "react";
import web from "../src/images/img1.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Let's learn Web development together join"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
