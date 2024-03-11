import {useState} from 'react';

const TodoForm = ({addTodo}) =>{
    const [value,setValue] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    
        return(
            <form  onSubmit={handleSubmit} className='todoform'> 
                <input type ="text"  placeholder="Enter your Todo" className="todoentry" value={value} onChange={handleChange}/>
                    <span><button className="add-btn">Add Todo</button></span>
            </form>
        )
};

export default TodoForm;