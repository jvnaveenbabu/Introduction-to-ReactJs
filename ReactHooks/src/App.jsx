import React, { useState } from "react";

const App = () => {
  const state = useState();
  //console.log(state);

  // Array Destructor Concept
  // While using useState we have two arugs 1. currentstate , 2. updatedstate
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
    // console.log("clicked " + count++);
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Increment</h3>
      <h1 style={{ textAlign: "center" }}>{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
};

export default App;
