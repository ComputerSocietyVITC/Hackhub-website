
import React from "react";
import Homepage from "./components/homepage";
import Aboutpage from "./components/aboutpage";
import Event from "./components/event";
import Sponsors from "./components/sponsors";
import NavBar from "./components/ui/navbar";


export default function Home() {
  return (
    <div>
      <NavBar />
      {/*
      <navbar/> */}
      <Homepage />
    {/*  
    <Aboutpage />
    <Event />
   <Sponsors />
  */}
    </div>
  );
}
