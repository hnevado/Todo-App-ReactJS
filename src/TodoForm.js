import React from 'react';

function TodoForm({addTodo,setOpenModal}) 
{
    const [newTodoValue,setNewTodoValue] = React.useState('');
    const [newTodoId,setNewTodoId] = React.useState(Math.floor(Math.random() * 990000));

    const onChange = (event) => {

       setNewTodoValue(event.target.value);

    }

    const onCancel = () => {

        setOpenModal(false);

    }

    const onSubmit = (event) => {

        event.preventDefault();
        
        addTodo(newTodoId,newTodoValue);
        console.log(newTodoId,newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <p><label>Introduce tu ToDo <br/>ID: #{newTodoId}</label></p>
            <textarea placeholder="Introduce tu ToDo"
            value={newTodoValue}
            onChange={onChange}></textarea>
            <div>
                <button
                className="cancelar"
                type="button"
                onClick={onCancel}>Cancelar</button>
                <button type="submit"
                className="crear">Crear</button>
            </div>
        </form>
    );
}

export { TodoForm };