import React from 'react';

const TodoItem = ({ todo, deleteTodo, id }) => {
  return (
    <div className="todo-item">
      <p>{todo} </p>
      <i class="fa-solid fa-xmark" onClick={() => deleteTodo(id)}></i>
    </div>
  );
};

export default TodoItem;
