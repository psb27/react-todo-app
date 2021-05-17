import React, { useState, useEffect } from 'react';
import './App.css';
// importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  

  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run only once to get todos from local storage
  useEffect(() => {

    getLocalTodos();
    
  },[])


  // useeffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status])

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
      default:
        setFilteredTodos(todos);
        break;
      
    }

  };

  // Save to Local
  const saveLocalTodos = () => {

      localStorage.setItem("todos", JSON.stringify(todos));
  };

  // get Todos from Local
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>
      <Form 
      todos={todos} 
      inputText={inputText}
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={ setStatus } />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={ filteredTodos }
      />
      
    </div>
  );
}

export default App;
