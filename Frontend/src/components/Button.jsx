import { useState } from 'react';
import '../assets/css/button.css';
export default function Button({ filter, setFilter }) {

    const [activeButton, setActiveButton] = useState(filter);

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
        setActiveButton(selectedFilter);
    };

    return (
        <div className="button-container">
            <button onClick={() => handleFilterChange('all')} className={activeButton === 'all' ? 'active' : ''}>All todos</button>
            <button onClick={() => handleFilterChange('active')} className={activeButton === 'active' ? 'active' : ''}>Active</button>
            <button onClick={() => handleFilterChange('completed')} className={activeButton === 'completed' ? 'active' : ''}>Completed</button>
        </div>
    );
}
