import React from 'react';

function TodoItem(props) {

    const onComplete = () => {

       if (props.completed)
        alert("Este ToDo está completado. Vas a quitarle el completado");
       else
        alert('ToDo ' +props.text+" completado");

    };

    const onDelete = () => {

        alert('ToDo ' +props.text+" eliminado");

    };

    return (

        <li>
            <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
            &#x2713; 
            </span>
            <span className={`todo-text ${props.completed && 'todo-text-completed'}`}> {props.text} </span>
            <span onClick={onDelete}> X </span>
        </li>

    );

}

export {TodoItem};
