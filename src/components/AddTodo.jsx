import React, { useContext, useState } from "react";
import "../styles/AddTodo.css";
import { todoContext } from "./TodoContextProvider/TodoContextProvider";

const AddTodo = () => {
  const { addTodo } = useContext(todoContext);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const newTodo = {
      task: value,
      completed: false,
    };
    addTodo(newTodo);
    setValue("");
  };

  return (
    <>
      <h1>ADD TODO</h1>
      <div className="add">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
    </>
  );
};

export default AddTodo;
