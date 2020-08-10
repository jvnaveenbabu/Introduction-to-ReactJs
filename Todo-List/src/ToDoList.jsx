import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="ToDo-style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li className="list-style">{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
