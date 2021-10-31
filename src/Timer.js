import { useEffect, useState } from "react";
function Timer() {
  const [currTime, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleString()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return <p style={{ fontSize: "30px" }}>YOUR LOCAL TIME IS {currTime}</p>;
}

export default Timer;
