import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <>
      <ToastContainer />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
