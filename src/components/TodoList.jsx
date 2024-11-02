import React, { useContext, useEffect } from "react";
import { todoContext } from "./TodoContextProvider/TodoContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { getTodos, todos } = useContext(todoContext);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul>
      {todos.map((el) => {
        return <TodoItem todo={el} key={el.id} />;
      })}
    </ul>
  );
};

export default TodoList;
