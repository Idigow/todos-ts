import React from 'react';
import {ITodo} from "../interfaces";

type TodoItemProps = {
    todo: ITodo,
    onRemove(id: number): void,
    onToggle(id: number): void
}
export const Todo: React.FC<TodoItemProps> = ({todo, onRemove, onToggle}) => {
    const removeHandler =(event: React.MouseEvent, id: number)=>{
        event.preventDefault()

        onRemove(id)
    }
    const classes = ["todo"]
    if (todo.completed){
        classes.push("completed")
    }
    return (
        <li className={classes.join(" ")}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={()=>onToggle(todo.id)}
                />
                <span>{todo.title}</span>
                <i
                    className="material-icons red-text"
                    onClick={event =>  removeHandler(event, todo.id)}
                >
                    delete
                </i>
            </label>
        </li>
    );
}

