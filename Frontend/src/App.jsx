import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import './assets/css/index.css';

export default function App() {
    const [todo, setTodo] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/todo')
            .then(res => res.json())
            .then(data => {
                setTodo(data.data);
                setLoading(false);
            })
          
    }, []);

    const addTodo = (newTodo) => {
        fetch('http://localhost:8000/todo',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTodo , isCompleted: false , createdAt: new Date().toISOString()}),
        })
        .then(res => res.json())
        .then((data) => {
            setTodo([...todo, data.data]);
        })
        
    };

    const toggleCheckbox = (id, isCompleted) => {
        fetch(`http://localhost:8000/todo/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isCompleted }),
        })
        .then(res => res.json())
        .then(() => {
            const toggleCheckbox = todo.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted };
                }
                return item;
            });
            setTodo(toggleCheckbox);
        })
    };

    const updateTodo = (id, title) => {
        fetch(`http://localhost:8000/todo/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        })
        .then((res) => res.json())
        .then(() => {
            const updatedTodo = todo.map((item) => {
                if(item.id === id){
                    return {...item,title,createdAt: new Date().toISOString()};
                }
                return item;
            });
            setTodo(updatedTodo);
        })

    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/todo/${id}`,{
            method: 'DELETE',
        })
        .then(() => {
            const updatedTodo = todo.filter((item) => item.id !== id);
            setTodo(updatedTodo);
            console.log(updatedTodo);
          
        })
       
    };


    const filteredTodos = todo.filter(item => {
        if (filter === 'active') return !item.isCompleted;
        if (filter === 'completed') return item.isCompleted;
        return true;
    });

    if (loading) return <div>Loading...</div>;

    return (
        <div className="main-container">
            <h1>Todo List</h1>
            <Card addTodo={addTodo}/>
            <Button filter={filter} setFilter={setFilter} />
            <Input list={filteredTodos} toggleCheckbox={toggleCheckbox} updateTodo={updateTodo} deleteTodo={handleDelete}/>  
            <button className="delete-all" onClick={() => setTodo([])}>🗑</button>
        </div>
    );
}
