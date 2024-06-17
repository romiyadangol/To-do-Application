import { useState } from "react";
import moment from 'moment';
import '../assets/css/input.css';

export default function Input({ list, toggleCheckbox, updateTodo, deleteTodo }) {
    const [editedId, setEditedId] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');

    const handleEditClick = (id, currentTitle) => {
        setEditedId(id);
        setEditedTitle(currentTitle);
    };

    const handleSaveClick = (id) => {
        updateTodo(id, editedTitle);
        setEditedId(null);
        setEditedTitle('');
    };
    
    const formatTime = (inputTime) => {
        return moment(inputTime).format('h:mm A'); 
    };

    return (
        <ul>
            {list.map((item) => (
                <div key={item.id} className={item.isCompleted ? 'strike' : ''}>
                    <label className="container">
                        <input
                            type="checkbox"
                            checked={item.isCompleted}
                            onChange={() => toggleCheckbox(item.id, !item.isCompleted)}
                        />
                        <div className="checkmark"></div>
                    </label>
                    {editedId === item.id ? (
                        <>
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                            <button onClick={() => handleSaveClick(item.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <p>{formatTime(item.createdAt)}</p>
                            <span>{item.title}</span>
                            <button onClick={() => handleEditClick(item.id, item.title)}>Edit</button>
                        </>
                    )}
                    <button className="delete" onClick={() => deleteTodo(item.id)}>X</button>
                </div>
            ))}
        </ul>
    );
}
