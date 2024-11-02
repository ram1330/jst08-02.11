import React, { useContext, useState } from "react";
import { todoContext } from "./TodoContextProvider/TodoContextProvider";

const EditTodo = ({ todo, handleShow }) => {
  const { editTodo } = useContext(todoContext);
  const [value, setValue] = useState(todo.task);

  const handleSaveTodo = () => {
    const editTodoObj = {
      task: value,
    };
    editTodo(editTodoObj, todo.id);
    handleShow()
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSaveTodo}>Save</button>
    </div>
  );
};

export default EditTodo;
