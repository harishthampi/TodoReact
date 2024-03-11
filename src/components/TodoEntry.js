import {useState} from 'react';

const TodoEntry = () =>{

const [value,setValue] = useState('');

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(value);
}

const handleChange = (e) =>{
    setValue(e.target.value);
}

    return(
        <form  onSubmit={handleSubmit}> 
            <input type ="text"  placeholder="Enter your Todo" className="todoentry" onChange={handleChange}/>
                <span><button className="add-btn">Add Todo</button></span>
        </form>
    )
}

export default TodoEntry