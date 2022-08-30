import React from "react";
import ISRO from "../Components/ISRO/ISRO";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

function ISROpage() {
  document.title = "API Forever - ISRO";
  return (
    <>
      <Navbar />
      <Sidebar />
      <ISRO />
    </>
  );
}

export default ISROpage;
