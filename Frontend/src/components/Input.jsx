import { useState } from "react";

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

    return (
        <ul>
            {list.map((item) => (
                <div key={item.id} className={item.isCompleted ? 'strike' : ''}>
                    <input
                        type="checkbox"
                        checked={item.isCompleted}
                        onChange={() => toggleCheckbox(item.id, !item.isCompleted)}
                    />
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
                            <span>{item.title}</span>
                            <button onClick={() => handleEditClick(item.id, item.title)}>Edit</button>
                        </>
                    )}
                    <button onClick={() => deleteTodo(item.id)}>X</button>
                </div>
            ))}
        </ul>
    );
}
