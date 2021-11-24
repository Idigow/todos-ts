import React, {useRef, useState} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>("")
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    //     setTitle(event.target.value)
    // }
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) =>{
        if (event.key === "Enter"){
            props.onAdd(ref.current!.value)
            ref.current!.value = ""
            // console.log(title)
            // setTitle("")
        }
    }
    return(
        <div className="input-field col s12 mt2">
            <input
                // value={title}
                ref={ref}
                id="text"
                type="text"
                className="validate"
                // onChange={changeHandler}
                placeholder="Введите задачу"
                onKeyPress={keyPressHandler}
            />

        </div>
    )
}