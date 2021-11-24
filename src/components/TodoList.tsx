import React from 'react';
import {Todo} from "./Todo";
import {ITodo} from "../interfaces";
type TodoListProps = {
    todos: ITodo [],
    onToggle(id: number): void,
    onRemove(id: number): void
}
export const TodoList: React.FC<TodoListProps> = ({ todos,onRemove, onToggle}) => {
    if (todos.length === 0){
        return <p className="center">Пока дел нет</p>
    }
    return (
        <ul>
            {todos.map(todo=>{
                return(
                    <Todo
                        todo={todo}
                        key={todo.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                )
            })}

        </ul>
    )
}

