import React from 'react';

function TodoList(props) {

   return (

    <ul id="lista_todos">
        {props.children}
    </ul>


   );


}

export {TodoList};
