
const Form = ({setInput, todos, setTodos, input, setStatus}) => {

    const inputHand = (e) => {
        setInput(e.target.value);
    };
    const submithand = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: input, completed: false, id: Math.random() *100000}
        ])
        setInput("");
    }
    const sHand = (e) =>{
        setStatus(e.target.value)
    }
    return ( 
        <div className='container'>
            <form>
                <input value={input} onChange={inputHand} type="text" className="todo-input"/>
                <button onClick={submithand} className="todo-button" type="submit">                           
                    <i class="fas fa-plus"></i>                              
                </button> 
                <div className="select">
                    <select onChange={sHand} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Done</option>
                        <option value="uncompleted">Not yet</option>
                    </select>
                </div>
            </form>
        </div>
     );
}
 
export default Form;