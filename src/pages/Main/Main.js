import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  // Testimonials,
  // Blog,
  Education,
  // Experience,
  Contacts,
  Projects,
  Services,
  // Achievement,
} from "../../components";

import GithubCommitCalender from "../../components/GitCalender/GithubCommitCalender";

function Main() {
  return (
    <div>
      <Helmet>
        <title>Abdul Quadir- Portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      {/* <Achievement /> */}
      {/* <Testimonials /> */}
      <Services />
      {/* <GithubCommitCalender /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
