import React from 'react';
// Importing components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
           <ul className="todo-list" >
           {filteredTodos.map((todo) => (
            <Todo 
            key={todo.id} 
            text={todo.text}
            todo={todo}
            setTodos={setTodos} 
            todos={todos}  />
           ))}
           
           </ul>
           
        </div>
    )
}

export default TodoList
