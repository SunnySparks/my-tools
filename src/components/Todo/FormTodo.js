import React, { useState } from "react";

const FormTodo = (props) => {
  const [taskInfo, setTaskInfo] = useState("");
  const { handleAddItem } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskInfo);
    setTaskInfo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="todoCont">
        <div id="todoInner">
          <input
            type="text"
            className="todoText"
            value={taskInfo}
            onChange={(e) => setTaskInfo(e.target.value)}
          />
          <button className="formButton" disabled={taskInfo ? "" : "disabled"}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
