import { useState } from "react";

const EditForm = ({editTodo,task}) =>{

    const [value,setValue] = useState(task.task);

    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    }
    
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    
        return(
            <form  onSubmit={handleSubmit} className='todoform'> 
                <input type ="text"  placeholder="Update your Todo" className="todoentry" value={value} onChange={handleChange}/>
                    <span><button className="add-btn">Update Todo</button></span>
            </form>
        )
    
}

export default EditForm