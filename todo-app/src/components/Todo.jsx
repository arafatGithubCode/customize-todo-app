import React from 'react'

import style from './css/todo.module.css'

const Todo = (props) => {

    const {title, desc} = props.todo;
    const {id} = props;

    const handleDelete = (id) => {
        props.onRemoveTodo(id)
    }

  return <article className= {style.todo}>

            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(id)}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>

        </article>
}

export default Todo
