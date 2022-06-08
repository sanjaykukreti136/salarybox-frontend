import React, { useState } from "react";
import "./attendence.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  currentSelectedRoll,
  currSelectedDate,
  isSubmit,
  setAttendence,
} from "../redux/actions/Action";

let Attendence = () => {
  let isSubmitTrue = useSelector((state) => state.submit);
  let selectedRoll = useSelector((state) => state.roll);
  let dispatch = useDispatch();
  let [roll, setRoll] = useState(1);
  function changeFun() {
    var select = document.getElementById("roll");
    var value = select.options[select.selectedIndex].value;
    setRoll(value);
    dispatch(currentSelectedRoll(value));
  }

  async function submitAttendence() {
    if (isSubmitTrue) {
      alert("already submitted attendence");
      return;
    } else {
      console.log(selectedRoll);
      /// api call to submit
      var apiBase = "";
      let d = new Date();
      let date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
      await axios.post(apiBase + "data/add", {
        day: date,
        rollNo: roll,
      });
      // await;
      alert("attendence done");
      dispatch(isSubmit(true));
    }
  }

  return (
    <>
      <div className="main1">
        <h2>Hello Everyone</h2>
        <h4>Mark Your Attendence</h4>

        <div className="matrix">
          <label for="roll">Select your rollno</label>
          <br />
          <select name="roll" id="roll" onChange={changeFun}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <button id="button-sub" onClick={submitAttendence}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Attendence;
