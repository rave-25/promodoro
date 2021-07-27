import React, { useEffect, useContext } from "react";

import CustomButton from "../../component/CustomButton";
import PomodoroEffect from "../../component/PomodoroEffect";
import SetPomodoro from "../../component/Set";
import { settings } from "../../container/settings";
import { Typography } from "@material-ui/core";
import "./pomodoro.css";

const Pomodoro = () => {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(settings);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    <div className="container">
      <div className="container_text">
        <Typography className="title">Let's Stay Productive!</Typography>
        <Typography className="description">Get your task Done</Typography>
        <span></span>
        <br /> <br />
        <Typography className="instruction">
          Customize your Pomodoro, Select time in minutes for your Focus, Break,
          and Long Break Time.
        </Typography>
      </div>
      {pomodoro !== 0 ? (
        <>
          <ul className="labels">
            <li>
              <CustomButton
                title="Work"
                activeClass={
                  executing.active === "work" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <CustomButton
                title="Short Break"
                activeClass={
                  executing.active === "short" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <CustomButton
                title="Long Break"
                activeClass={
                  executing.active === "long" ? "active-label" : undefined
                }
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <CustomButton title="Settings" _callback={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <PomodoroEffect
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </PomodoroEffect>
            </div>
          </div>
          <div className="button-wrapper">
            <CustomButton
              title="Start"
              activeClass={!startAnimate ? "active" : undefined}
              _callback={startTimer}
            />
            <CustomButton
              title="Pause"
              activeClass={startAnimate ? "active" : undefined}
              _callback={pauseTimer}
            />
          </div>
        </>
      ) : (
        <SetPomodoro />
      )}
    </div>
  );
};

export default Pomodoro;
