import React, { useContext, useState } from "react";
import { todoContext } from "./TodoContextProvider/TodoContextProvider";
import EditTodo from "./EditTodo";

const TodoItem = ({ todo }) => {
  const { deleteTodo, editTodo } = useContext(todoContext);
  const [show, setShow] = useState(false);
  const [todoCompleted, setTodoCompleted] = useState(todo.completed);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleSwitchStatus = () => {
    setTodoCompleted(!todoCompleted);
    const todoObj = {
      completed: !todoCompleted,
    };
    editTodo(todoObj, todo.id);
  };

  return (
    <li>
      <span onClick={handleSwitchStatus}>
        <input type="checkbox" checked={todoCompleted} />
      </span>
      <span>{todo.task}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShow}>Edit</button>
      {show ? <EditTodo todo={todo} handleShow={handleShow} /> : null}
    </li>
  );
};

export default TodoItem;
