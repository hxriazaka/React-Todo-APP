import Todo from "./Todo"


const TodoList = ({ todos, setTodos, filttodos}) => {
    return (
        <div className='container'>
            <div className="todo-container">
                <ul className="todo-list">{filttodos.map(todo =>(
                    < Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
                ))}</ul>
            </div>
        </div>
     );
}
 
export default TodoList;