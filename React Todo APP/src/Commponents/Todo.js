const Todo = ({ text, todos, setTodos, todo}) => {
    const deletHand = () => {
        setTodos(todos.filter((elm) => elm.id !== todo.id))
    }  
    const doneHand = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            };
            return item;
        }));
    };
    
    return ( 
        <div className='gg container'>
            <div className="todo">
                <li className={`todo-item ${todo.completed ? 'active' : ""}`}>{text}</li>              
            </div>
            <button onClick={doneHand} className='complete-btn'><i className="fas fa-check"></i></button>
            <button onClick={deletHand} className='trash-btn'><i className="fas fa-trash"></i></button>  
        </div>
     );
}
 
export default Todo;