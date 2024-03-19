import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

import ITodo from "../interface/ITodo";

interface ITodoForm{
    setTodos: () => void;
    todos: ITodo[];
}

export default function TodoForm(props: ITodoForm){

    const {  todos, setTodos } = props;
    const [ todoTitle, setTodoTitle] = useState<string>(" ")

    const handleAddTodo = () => {
        const newTodo: ITodo = {
            id: todos[todos.length - 1].id + 1,
            title: todoTitle,
            done:false,
        };

        setTodos([...todos, newTodo]);
        setTodoTitle(" ");
    };

    return(
        <div className="mx-auto w-3/6 my-14">
            <h1 className="text-2xl text-center text-white">
                {" "}Done : {todos.filter((item) => item.done === true).length} </h1>
            <Input 
            value={todoTitle} 
            onChange={(e) => setTodoTitle(e.target.value)} 
            placeholder="Add Todo" 
            className="my-5" />
            <Button colorScheme="green" onClick={() => handleAddTodo()}> 
            {" "}Add Todo{" "}
            </Button>
        </div>
    )
}