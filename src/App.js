import React from 'react';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
import {useLocalStorage} from './customHooks/useLocalStorage';
import {Modal} from './Modal';
import {TodoForm} from './components/TodoForm';

import './components/TodoCounter.css';
import './components/TodoItem.css';
import './components/TodoList.css';
import './components/TodoSearch.css';
import './components/CreateTodoButton.css';
import './App.css';
import './Modal.css';
import './components/TodoForm.css';


function App(props) {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const [openModal, setOpenModal] = React.useState(false);
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




  const addTodo = (id,text) => {

    const newTodos = [...todos];
    
    newTodos.push( {

      id,
      text

    })

    saveTodos(newTodos);

  }

  //Marcar como completado los todos
  const completeTodo = (id) => {

    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.id == id);
    
    if (newTodos[todoIndex].completed)
      newTodos[todoIndex].completed=false;
    else
    newTodos[todoIndex].completed=true;

    saveTodos(newTodos);

  }

  const deleteTodo = (id) => {

    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.id == id);
    
    newTodos.splice(todoIndex,1);

    saveTodos(newTodos);

  }

  //useEffect antes de renderizar
  //useLayoutEffect después renderizar (en caso de hacer eventos, add event listener con etiquetas de html que no podemos manipular desde react)
  React.useEffect(() => {

      console.log("use affect");


  })

  //Devolvemos los los componentes que vamos a utilizar, englobados en la etiqueta invisible React.fragment (para no llenar de divs innecesarios nuestra app)
  //Por cada todo que haya dentro de nuestra lista de todos, podamos renderizar una vez nuestro todo
  //Cuando hacemos un render de una lista (todos), debemos mandar una propiedad key a nuestros componentes para que React pueda identificar qué componente es cual dentro de una lista
  //(Hay que enviarle un identificador único) y así nos evita render innecesarios cuando un render no debe cambiar

  return ( 
    <React.Fragment>
       {openModal && (
          <Modal setOpenModal={setOpenModal}>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
          </Modal>
        )}
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>

        {searchedTodos.map(todo => (
          //Por cada todo, renderizamos un TodoItem
          <TodoItem completed={todo.completed} key={todo.id} text={todo.text} onComplete={() => completeTodo(todo.id)} onDelete={() => deleteTodo(todo.id)}/>

        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal}/>


    </React.Fragment>
  );
}

export default App;
