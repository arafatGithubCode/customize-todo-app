import React, {useState} from 'react'

import style from './css/newTodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState([{title : '', desc : ''}]);

    const {title, desc} = todo;

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!title.trim() && !desc.trim()) {
            alert("Please, add your todo!")
            return;
        }
        
        setTodo({title : '', desc : ''})
        props.onAddTodo(todo)
    }
    const handleChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setTodo({...todo, [name] : value});
    }

  return <form className= {style.form} onSubmit={handleSubmit}>

            <div className= {style["form_field"]}>
                <label htmlFor="title">Title: </label>
                <input type="text" id='title' name='title' onChange={handleChanged} value={title} />
            </div>

            <div className= {style["form_field"]}>
                <label htmlFor="desc">Description: </label>
                <textarea name="desc" id="desc" onChange={handleChanged} value={desc} />
            </div>

            <div>
                <button>Add todo</button>
            </div>
    
         </form>
}

export default NewTodo
