import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { settings } from "../container/settings";

const PomodoroEffect = ({ key, timer, animate, children }) => {
  const { stopAimate } = useContext(settings);
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["#FE6F6B", 0.33],
        ["#FE6F6B", 0.33],
        ["#149fff", 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default PomodoroEffect;
