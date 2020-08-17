import React from "react";

const Sresult = (props) => {
  const img = `https://source.unsplash.com/500x300/?${props.name}`;

  return (
    <>
      <div>
        <img src={img} alt="images" />
      </div>
    </>
  );
};

export default Sresult;
