import { useEffect, useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import './assets/css/index.css';

function App() {
  const [todoList, setTodoList] = useState([
    // { id: 1, title: 'Task 1', isComplete: false },
    // { id: 2, title: 'Task 2', isComplete: false },
    // { id: 3, title: 'Task 3', isComplete: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/todo')
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data.data);
      });
  }, []);

  const handleAddTodo = () => {
    fetch('http://localhost:8000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: inputValue, isCompleted: false,createdAt: new Date().toISOString() }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoList([...todoList, data.data]);
        setInputValue('');
      });
  };

  const toggleCheckBox = (id, isCompleted) => {
    fetch(`http://localhost:8000/todo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted }),
    })
      .then((res) => res.json())
      .then(() => {
        const toggleCheckbox = todoList.map((item) => {
          if (item.id === id) {
            return { ...item, isCompleted };
          }
          return item;
        });
        setTodoList(toggleCheckbox);
      });
  };

  const handleUpdateTodo = (id, title) => {
    fetch(`http://localhost:8000/todo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then(() => {
        const updatedTodo = todoList.map((item) => {
          if (item.id === id) {
            return { ...item, title, createdAt: new Date().toISOString() };
          }
          return item;
        });
        setTodoList(updatedTodo);
      });
  };

  const handleDeleteTodo = (id) => {
    fetch(`http://localhost:8000/todo/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const deleteTodo = todoList.filter((item) => item.id !== id);
      setTodoList(deleteTodo);
    });
  };

  return (
    <>
      <div className="main-container">
        <Header title="TODO-LIST" />
        <section className='form-wrapper'>
          <Input
            name="todo"
            placeholder="Enter your task..."
            value={inputValue}
            onchange={(e) => setInputValue(e.target.value)}
          />
          <Button name="Add-btn" label="+" onclick={handleAddTodo} />
        </section>

        <section >
          <Card
            list={todoList}
            toggleCheckBox={toggleCheckBox}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
          <button className="delete-all" onClick={() => setTodoList([])}>🗑</button>
        </section>
      </div>
    </>
  );
}

export default App;
