import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState(true);

  const clickOnChange = () => {
    if (password) {
      setPassword(false);
    } else {
      setPassword(true);
    }
  };

  return (
    <div className="center">
      <span>
        <input type={password ? "password" : "text"} placeholder="password" />
        <button onClick={clickOnChange}>Click</button>
      </span>
    </div>
  );
};

export default App;
