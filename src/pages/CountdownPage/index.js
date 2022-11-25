import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./CountdownPage.css";
const CountdownPage = () => {
  const { event } = useParams();
  //Capitalize first letter of Event name
  const capitalEvent = event.charAt(0).toUpperCase() + event.slice(1);

  ////////////////////////////// COUNTDOWN LOGIC//////////////////////////////////
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [timeDifference, setTimeDifference] = useState(0);
  const [data, setData] = useState({});

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let interval = useRef();
  useEffect(() => {
    setInterval(async () => {
      try {
        const datanow = await axios.get(
          `https://counter-3m98.onrender.com/api/v1/countdown/${event}`
        );
        setData(datanow.data);
        const date = new Date(datanow.data.time).getTime();
        // const formattedDate = date.getTime();
        console.log(date);
        const now = new Date().getTime();
        const difference = date - now;

        const timerDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const timerHours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const timerMins = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        let timerSecs = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(timerDays);
        setHours(timerHours);
        setMinutes(timerMins);
        setSeconds(timerSecs);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  }, []);

  return (
    <div className="countdown__container">
      <h1>{capitalEvent}</h1>

      <h4>{data.message}</h4>
      <div className="countdown flex">
        <div className="days">
          <span> {days} </span>
          <p> Days </p>
        </div>
      
        <div className="hours">
          <span> {hours} </span>
          <p> Hours </p>
        </div>
        <div className="mins">
          <span> {minutes} </span>
          <p> Mins </p>
        </div>
        <div className="secs">
          <span> {seconds} </span>
          <p> Secs </p>
        </div>
      </div>
    </div>
  );
};
export default CountdownPage;
