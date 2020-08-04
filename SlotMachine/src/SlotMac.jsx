import React from "react";

const SlotMac = (props) => {
  //   let x = "🙂";
  //   let y = "🙂";
  //   let z = "😎";

  //   let x = props.x;
  //   let y = props.y;
  //   let z = props.z;

  // Object Destructor Concept
  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is matching</h3>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h3>This is not matching</h3>
          <hr />
        </div>
      </>
    );
  }
};

export default SlotMac;
