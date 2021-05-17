import React from 'react'

export const Todo = ({ text, todo, todos, setTodos }) => {
    // Events Handler - delete
    const delelteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    // Events Handler - complete
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={ completeHandler } className="complete-btn"><i className="fas fa-check"></i></button>
        <button onClick={ delelteHandler } className="trash-btn"><i className="fas fa-trash"></i></button>
            
        </div>
    );
}

export default Todo
