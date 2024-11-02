import axios from "axios";
import React, { createContext, useReducer } from "react";

export const todoContext = createContext(null);

const INITIAL_STATE = {
  todos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return { ...state, todos: action.payload };

    case "EDIT_TODO":
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:8000/todos");
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };

  const addTodo = async (newTodo) => {
    const { data } = await axios.post("http://localhost:8000/todos", newTodo);
    dispatch({
      type: "ADD_TODO",
      payload: data,
    });
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8000/todos/${id}`);
    const filteredTodos = state.todos.filter((el) => el.id !== id);
    dispatch({
      type: "DELETE_TODO",
      payload: filteredTodos,
    });
  };

  const editTodo = async (todo, id) => {
    const { data } = await axios.patch(`http://localhost:8000/todos/${id}`, todo);
    const editTodoArr = state.todos.map((el) => (el.id === id ? data : el));
    dispatch({
      type: "EDIT_TODO",
      payload: editTodoArr,
    });
    console.log(data);
  };

  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        getTodos: getTodos,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        editTodo: editTodo,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
