import React from "react";
import "./calender.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  currentSelectedRoll,
  currSelectedDate,
  isSubmit,
  setAttendence,
} from "../redux/actions/Action";
// import { json } from "express";/
let Calender = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.list);
  console.log(JSON.stringify(data) + " ...");
  async function selectToday() {
    var apiBase = "";
    let d = new Date();
    let date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    await axios.post(apiBase + "data/add", {
      day: date,
    });
    await axios
      .post(apiBase + "data/get", {
        day: date,
      })
      .then((res) => {
        dispatch(setAttendence(res.data));
      })
      .catch((err) => {
        dispatch(setAttendence([]));
      });
  }
  async function selectYes() {
    var apiBase = "";
    let d = new Date();
    let date =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + (d.getDate() - 1);
    await axios.post(apiBase + "data/add", {
      day: date,
    });
    await axios
      .post(apiBase + "data/get", {
        day: date,
      })
      .then((res) => {
        dispatch(setAttendence(res.data));
      })
      .catch((err) => {
        dispatch(setAttendence([]));
      });
  }
  async function selectDate() {
    var apiBase = "";
    let selDate = document.getElementById("id").nodeValue;
    await axios
      .post(apiBase + "data/get", {
        day: selDate,
      })
      .then((res) => {
        dispatch(setAttendence(res.data));
      })
      .catch((err) => {
        dispatch(setAttendence([]));
      });
  }
  return (
    <>
      <div className="main">
        <div className="upper">
          <div className="today">
            <button id="cal-btn" onClick={selectToday}>
              Today
            </button>
          </div>
          <div className="yes">
            <button id="cal-btn" onClick={selectYes}>
              Yesterday
            </button>
          </div>
          <div className="select">
            <input
              type="date"
              id="date"
              name="birthday"
              onfocus="(this.type='date')"
              onblur="if(!this.value)this.type='text'"
              onChange={selectDate}
            />
          </div>
        </div>
        <h4>Here is the attendence list of Present Students on Today </h4>
        <div className="data">
          {data.length > 0
            ? data.map((el) => {
                return <h5>Roll No - {el}</h5>;
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Calender;
