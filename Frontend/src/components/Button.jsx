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
