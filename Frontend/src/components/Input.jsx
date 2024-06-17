export default function Input({todo, updateTodo, deleteTodo}) {
    return(
        <>
            <ul>
                {todo.map((item) => {
                    return(
                        <li key={item.id} 
                            className={item.isCompleted ? 'completed' : ''}>
                            <input 
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => {
                                updateTodo(item.id, !item.isCompleted)
                            }} />
                            {item.title}
                            <button onClick={()=>{
                                updateTodo(item.id, !item.isCompleted)
                            }}>Update</button>
                            <button onClick={() => {
                                deleteTodo(item.id)
                            }}>
                                X
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}