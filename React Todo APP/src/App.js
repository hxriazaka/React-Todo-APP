import './App.css';
import Form from './Commponents/Form';
import Head from './Commponents/Head';
import TodoList from './Commponents/TodoList';
import { useState, useEffect } from "react";

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filttodos,setFiltodos] = useState([]);
  


  const filtHand = () => {
    switch (status) {
      case 'completed':
        setFiltodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFiltodos(todos.filter(todo => todo.completed === false));
        break;
      default :
      setFiltodos(todos);
        break;  
    }  
  };
 //save local//
  const saveLocal= () =>{
      localStorage.setItem('todos', JSON.stringify(todos))
  };
  const getLocal = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todolocal);
    };   
  }
  // useEffect //
  useEffect (() => {
    getLocal();
  },[]);
  useEffect (() => {
    filtHand();
    saveLocal();
  },[todos, status]);

  return (
    <div className="App" >
      < Head />
      < Form input={input} todos={todos} setTodos={setTodos} setInput={setInput} setStatus={setStatus}/>
      < TodoList todos={todos} setTodos={setTodos}  filttodos={filttodos}/>
    </div>
  );
}

export default App;
