import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

import './App.css';

//Creamos un array con objetos para una lista de todos predefinida
const todos = [

   {id:1, text: 'Ver la teoría de reactjs', completed:false},
   {id:2, text: 'Crear un proyecto reactjs', completed:false},
   {id:3, text: 'Programar una app con reactjs', completed:false},

]

function App(props) {

  //Devolvemos los los componentes que vamos a utilizar, englobados en la etiqueta invisible React.fragment (para no llenar de divs innecesarios nuestra app)
  //Por cada todo que haya dentro de nuestra lista de todos, podamos renderizar una vez nuestro todo
  //Cuando hacemos un render de una lista (todos), debemos mandar una propiedad key a nuestros componentes para que React pueda identificar qué componente es cual dentro de una lista
  //(Hay que enviarle un identificador único) y así nos evita render innecesarios cuando un render no debe cambiar

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>

        {todos.map(todo => (
          //Por cada todo, renderizamos un TodoItem
          <TodoItem key={todo.id} text={todo.text} />

        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
