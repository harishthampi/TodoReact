import TodoForm from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import EditForm from "./EditForm";

const TodoList = () =>{

    const[todos,setTodos] = useState([]);

    const addTodo = todo =>{
        setTodos([...todos,{id:uuidv4(),task:todo,
        isCompleted:false,isEditing:false}])
    }

    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => 
            todo.id != id
            )
        )
    }

    const toggleStatus = (id) =>{
        console.log(id);
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo,isCompleted :!todo.isCompleted}:todo
            )
        ) ;  
    }

    const editTodo = (id) =>{
        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo,isEditing : !todo.isEditing}:todo
            )
        )
    }

    const editTask = (task,id) =>{
        setTodos(
            todos.map((todo) => 
            todo.id === id? {...todo,task,isEditing : !todo.isEditing}:todo
            )
        )
    }

    return (
        <div className="todolist">
            <h1>Quick Todos</h1>
            <TodoForm addTodo={addTodo}/>  
          {
            todos.map((todo) =>(
                todo.isEditing ? (<EditForm editTodo={editTask} task={todo}/>)
                :(
                    <Todo task ={todo} key={todo.id} toggleStatus={toggleStatus} deleteTodo={deleteTodo} editTodo={editTodo}/>
                ) 
            ))
          }
            
        </div>


    )
}

export default TodoList;