import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Contact from "../Components/Contact/Contact";

function ContactPage() {
  document.title = "API Forever - Contact";
  return (
    <>
      <Navbar />
      <Sidebar />
      <Contact />
    </>
  );
}

export default ContactPage;
