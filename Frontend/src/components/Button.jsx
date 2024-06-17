// import { useState } from "react";

// export default function Button() {
//     const[filter,setFilter] = useState('all');
//     const handleAllTodo = () => {
//         setFilter('all');
//     }
//     const handleActive = () => {
//         setFilter('active');
//     }
//     const handleComplete = () => {
//         setFilter('completed');
//     }
//     return(
//         <>
//             <div className="button-container">
//                 <button 
//                 onClick={handleAllTodo}
//                 className={filter === 'all' ? 'active' : ''}
//                 >All todos</button>

//                 <button 
//                 onClick={handleActive}
//                 className={filter === 'active' ? 'active' : ''}
//                 >Active</button>

//                 <button 
//                 onClick={handleComplete}
//                 className={filter === 'completed' ? 'active' : ''}
//                 >Completed</button>
//             </div>
//         </>
//     )

// }import React from 'react';

export default function Button({ filter, setFilter }) {
    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    return (
        <div className="button-container">
            <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All todos</button>
            <button onClick={() => handleFilterChange('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
            <button onClick={() => handleFilterChange('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
        </div>
    );
}
