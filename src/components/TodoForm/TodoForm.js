import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = ({ setTodos, todos }) => {
  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = (e) => {
    if (todoValue === '') {
      toast.error('Please enter a todo!');
    } else if (todos.includes(todoValue)) {
      toast.error('Todo already exist!');
    } else if (todoValue.length < 3) {
      toast.error('Todo must be at least 3 characters long!');
    } else {
      const newTodo = todoValue.trim();
      setTodos([...todos, newTodo]);
      toast.success('Todo Added!');
    }
  };

  return (
    <form action="" id="todo-form">
      <input
        type="text"
        id="form-input"
        placeholder="Please Enter Your Todos..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          setTodoValue('');
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
