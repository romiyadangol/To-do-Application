import { useState } from 'react';
import '../assets/css/card.css';

function Card({ addTodo }){
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div className="todo-form">
      <form className='form-submit' onSubmit={handleSubmit}>
        <input
          className='input-todo'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button className='button-add' type="submit">+</button>
      </form>
    </div>
  );
}


export default Card;
