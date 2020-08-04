import React from "react";
import SlotMac from "./SlotMac";

const App = () => {
  return (
    <>
      <h2 className="heading_style">
        🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold" }}>Slot machine game</span> 🎰
      </h2>
      <div className="slot_mac">
        <SlotMac x="🙂" y="🙂" z="🙂" />
        <hr />
        <SlotMac x="🙂" y="😉" z="😆" />
        <hr />
        <SlotMac x="🙈" y="🙉" z="🙊" />
        <hr />
        <SlotMac x="🍎" y="🍒" z="🥭" />
        <hr />
        <SlotMac x="🌱" y="🌱" z="🌱" />
      </div>
    </>
  );
};

export default App;
