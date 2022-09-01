import React, { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const [dateSet, setDateSet] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("December 31, 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stop the timer
        clearInterval(interval.current);
      } else {
        //update the timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    setInterval(() => {
      const date = new Date();
      setDateSet(date.toLocaleDateString());
    }, 1000);
  });

  return (
    <div className="App">
      <h1 style={{ marginBottom: "3rem", color: "#06f1f6" }}>
        Today: {dateSet}
      </h1>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}

export default App;
