import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-container">
      {todos.map((todo, idx) => (
        <TodoItem todo={todo} id={idx} key={idx} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
