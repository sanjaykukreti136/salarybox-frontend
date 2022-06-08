import React from "react";
import Calender from "./components/Calender";
import Attendence from "./components/Attendence";
import "./app.css";
let App = () => {
  return (
    <>
      <span>
        <Attendence />
        <Calender />
      </span>
    </>
  );
};

export default App;
