import React, { useState } from "react";

const FormTodo = () => {
  const [taskInfo, setTaskInfo] = useState("");
  return (
    <form>
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
