import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const App = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry!! You cannot decrement more");
      setNum(0);
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h2 style={{ fontSize: "35px" }}>Counter</h2>
          <h1>{num}</h1>
          <div className="btn-div">
            <Tooltip title="Increment">
              <Button onClick={incNum} className="btn-green">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Decrement">
              <Button onClick={decNum} className="btn-red">
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
