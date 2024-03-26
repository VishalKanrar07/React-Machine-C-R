import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  const [halfSuccess, setHalfSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar
        value={value}
        onComplete={() => setSuccess(true)}
        onHalfComplete={() => setHalfSuccess(true)}
      />
      <span>
        {success
          ? "Complete!"
          : halfSuccess
          ? `${value.toFixed()} complete`
          : "Loading..."}{" "}
      </span>
    </div>
  );
}
