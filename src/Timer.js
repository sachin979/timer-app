import { useCallback, useState } from "react";

export default function useTimer() {
  const [timer, setTimer] = useState(0);
  const [timerVar, setTimerVar] = useState(undefined);

  const start = () => {
    if (!timerVar) {
      setTimerVar(
        setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 1000)
      );
    }
  };
  const pause = () => {
    clearInterval(timerVar);
    setTimerVar(undefined);
  };
  const stop = () => {
    console.log(timerVar);
    setTimer(0);
    clearInterval(timerVar);
    setTimerVar(undefined);
  };
  return { timer, start, stop, pause };
}
