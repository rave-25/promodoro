import React, { useContext, useState } from "react";
import { settings } from "../container/settings";

const Set = () => {
  const [newTimer, setNewTimer] = useState({
    work: 30,
    short: 5,
    long: 25,
    active: "work",
  });

  const { updateExecute } = useContext(settings);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default Set;
