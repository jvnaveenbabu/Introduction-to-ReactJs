import React from "react";
import web from "../src/images/about.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="All About Me"
        description=" I'm J V Naveen Babu pursuing my Btech (UG) in Computer Science and
        Engineering from
        Gitam Deemed to be University,Visakhapatnam. I am
        good in Web technology and Full stack web developer enthusiast.
        I prefer working with a team. As different members contribute
        different ideas, it paves the road for more productive result. My
        strength is to work independently, quick learner,
        good leadership skills, team work & helping tendency.
       When I'm not in front of a computer.I'm probably
        listen music , play Outdoor games and make web developement post for
        instagram page."
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
