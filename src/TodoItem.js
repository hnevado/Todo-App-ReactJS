import React from 'react';

function TodoItem(props) {

    return (

        <li>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
            &#x2713; 
            </span>
            <span className={`todo-text ${props.completed && 'todo-text-completed'}`}> {props.text} </span>
            <span > X </span>
        </li>

    );

}

export {TodoItem};
