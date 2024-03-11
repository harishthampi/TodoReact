import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditForm from './EditForm';

const Todo = ({task,toggleStatus,deleteTodo,editTodo}) =>{
    return (
    <div className="todo">
        <p className={`${task.isCompleted ? "completed" : "incomplete"}`} onClick={() => toggleStatus(task.id)}>{task.task}</p> 
         <div>
        <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrashAlt} className='fa-trash' onClick={() => deleteTodo(task.id)}/>
        </div>

    </div>
    )
}

export default Todo;