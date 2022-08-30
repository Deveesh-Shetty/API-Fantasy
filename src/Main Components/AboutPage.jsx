import React from "react";
import About from "../Components/About/About";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

function AboutPage() {
  document.title = "API Forever - About";
  return (
    <>
      <Navbar />
      <Sidebar />
      <About />
    </>
  );
}

export default AboutPage;
