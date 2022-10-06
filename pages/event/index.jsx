import React from "react";
import { useState } from "react";
import useCountdown from "../../src/hooks";
import Bg from "../../src/assets/clock.mp4";

const Event = () => {
  const [timeVal, setTimeVal] = useState(0);
  const endTime = new Date().getTime() + 60000 * timeVal; //different minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  const handleClick = (val) => {
    setTimeVal(val);
  };
  return (
    <div className="event-page">
      {/* Video Background */}
      <video className="video-background" loop muted autoPlay>
        <source src={Bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      {/* Container */}
      <div className="container">
        {/* Countdown  */}
        <div className="countdown" id="countdown">
          <ul>
            <li>
              <span>{`${minutes}`}</span>Minutes
            </li>
            <li>
              <span>{`${seconds}`}</span>Seconds
            </li>
          </ul>
          <div className="buttons">
            <button className="effect">
              <input type="button" value={2} onClick={() => handleClick(2)} />
            </button>
            <button className="effect">
              <input type="button" value={5} onClick={() => handleClick(5)} />
            </button>
            <button className="effect">
              <input type="button" value={10} onClick={() => handleClick(10)} />
            </button>
            <span>Minutes</span>
          </div>
          <div className="button-wrap">
            <button
              onClick={() => setEndTime(endTime)}
              type="button"
              id="countdown-button"
            >
              <span className="start-text">Start</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
