import React, { useState } from "react";

const App = () => {
  let currt = new Date().toLocaleTimeString();

  // React Hook Concept
  const [ctime, setCtime] = useState(currt);
  
  // fun for Button (Get Time)
  const UpdateTime = () => {
    let ncurrt = new Date().toLocaleTimeString();
    setCtime(ncurrt);
  };
  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </>
  );
};

export default App;
