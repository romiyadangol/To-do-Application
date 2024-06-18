import { useState } from 'react';
import moment from 'moment';
import '../assets/css/card.css';

function Card(props) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEditTodo = (id, currentTitle) => {
    setEditIndex(id);
    setEditValue(currentTitle);
  };

  const handleSaveTodo = (id) => {
    props.handleUpdateTodo(id, editValue);
    setEditIndex(null);
    setEditValue('');
  };
  const formatTime = (inputTime) => {
    return moment(inputTime, moment.ISO_8601).format('h:mm A');
};

  return (
    <ul>
      {props.list.map((item) => (
        <div key={item.id} className={item.isCompleted ? 'strike' : ''}>
          <label className="container">
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => props.toggleCheckBox(item.id, !item.isCompleted)}
            />
            <div className="checkmark"></div>
          </label>
          {editIndex === item.id ? (
            <>
              <input
                className="edit-input"
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button className="save-btn" onClick={() => handleSaveTodo(item.id)}>📩</button>
            </>
          ) : (
            <>
              <p>{formatTime(item.createdAt)}</p>
              <span>{item.title}</span>
              <button className="edit-btn" onClick={() => handleEditTodo(item.id, item.title)}>✏️</button>
            </>
          )}
          <button className="delete" onClick={() => props.handleDeleteTodo(item.id)}>❌</button>
        </div>
      ))}
    </ul>
  );
}

export default Card;
