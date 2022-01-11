import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import './TodoCounter.css';
import './TodoItem.css';
import './TodoList.css';
import './TodoSearch.css';
import './CreateTodoButton.css';
import './App.css';

//Creamos un array con objetos para una lista de todos predefinida
const defaultTodos = [

   {id:1, text: 'Leer documentación reactjs', completed:true},
   {id:2, text: 'Crear un proyecto reactjs', completed:false},
   {id:3, text: 'Programar una app con reactjs', completed:false},

]



function App(props) {

  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];

  if (!searchValue.length > 0)
   searchedTodos=todos;
  else
  {
     searchedTodos = todos.filter(todo => {

      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);

     });
    

  }

  //Devolvemos los los componentes que vamos a utilizar, englobados en la etiqueta invisible React.fragment (para no llenar de divs innecesarios nuestra app)
  //Por cada todo que haya dentro de nuestra lista de todos, podamos renderizar una vez nuestro todo
  //Cuando hacemos un render de una lista (todos), debemos mandar una propiedad key a nuestros componentes para que React pueda identificar qué componente es cual dentro de una lista
  //(Hay que enviarle un identificador único) y así nos evita render innecesarios cuando un render no debe cambiar

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>

        {searchedTodos.map(todo => (
          //Por cada todo, renderizamos un TodoItem
          <TodoItem completed={todo.completed} key={todo.id} text={todo.text} />

        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
