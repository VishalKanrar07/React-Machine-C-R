import "./App.css";
import { useState } from "react";

const App = () => {
  const [selectedstarcount, setselectedstarcount] = useState(0);
  const [selectedhovercount, setselectedhovercount] = useState(0);
  return (
    <div className="app">
      Star Rating
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          return (
            <span
              key={index}
              className={`${index + 1 <= selectedstarcount ? "selected" : ""} ${
                index + 1 <= selectedhovercount ? "selected" : ""
              }`}
              onMouseOver={() => {
                setselectedhovercount(index + 1);
              }}
              onMouseOut={() => {
                setselectedhovercount(0);
              }}
              onClick={() => {
                setselectedstarcount(index + 1);
              }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      Rating count : {selectedstarcount}
      <p>Hover Rating count : {selectedhovercount}</p>
    </div>
  );
};

export default App;
