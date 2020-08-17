import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={inputEvent}
          value={img}
        ></input>
        {img === "" ? null : <Sresult name={img}></Sresult>}
      </div>
    </>
  );
};

export default Search;
