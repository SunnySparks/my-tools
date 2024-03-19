import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./formTodo";

const TodoContainer = () => {
  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <div>
      TodoContainer
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default TodoContainer;
