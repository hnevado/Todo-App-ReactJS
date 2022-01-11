import React from 'react';

function CreateTodoButton() {

    const onClickButton = (msg) => {
        console.log(msg)
    }

    return (

        <p className="textRight marginRight10">
            <button id="btnNewTodo"
             onClick={() => onClickButton('Clic en el botón de nuevo todo')}
            >
                
                +
            
            </button>
            
        </p>

    );


}

export {CreateTodoButton};