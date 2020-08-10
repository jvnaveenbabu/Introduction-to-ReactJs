import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  // target the value of where you want to show
  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  // While clicking the btn to add items
  const AddList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    // to make invisible or empty in i/p after clicking on btn
    setInputList("");
  };

  const deleteItems = (id) => {
    // console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            onChange={itemEvents}
            value={inputList}
          />
          <button type="submit" onClick={AddList}>
            +
          </button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <ToDoList
                  Key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
