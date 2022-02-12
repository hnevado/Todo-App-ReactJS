import React from 'react';

function CreateTodoButton(props) {

    
    const onClickButton = (msg) => {
        props.setOpenModal(true);
    }

    return (

        <p className="textRight marginRight10">
            <button id="btnNewTodo"
             onClick={onClickButton}
            >
                
                +
            
            </button>
            
        </p>

    );


}

export {CreateTodoButton};