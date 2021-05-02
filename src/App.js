import { useEffect, useState } from 'react';
import FormList from './components/FormList';
import FormTodos from './components/FormTodos';
import Cards from './components/Cards';
import './App.css';

const obtenerLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return JSON.parse(todos) || []
}

const actualizarLocalStorage = (data) => {
  localStorage.setItem('todos', JSON.stringify(data))
}

function App() {
  const [tab, setTab] = useState(0);
  const [lists, setLists] = useState(obtenerLocalStorage());


  const addList = (name) => {
    setLists((lists) => {
      if (name === "") return lists;
      return [...lists, {title: name, todos:[]}];
    });
  };

  const addTodo = (id, text) =>{
    setLists((lists) => {
      if(text === "") return lists;
      return lists.map((list, index) => index !== id ? list : {title: list.title, todos: [...list.todos, text]});
    });
  };

  const deleteTodo = (idLista, idTodo) =>{
    setLists((lists) => {
      const newLists = [...lists];
      newLists[idLista].todos = newLists[idLista].todos.filter((l, id) => id !== idTodo)
      return newLists;
    });
  };

  const deleteList = (id) =>{
    setLists((lists) => {
      const newLists = lists.filter((l, i) => i !== id)
      return newLists;
    });
  };

  useEffect(()=>{
    actualizarLocalStorage(lists);
  });

  return (
    <>
      <header className="text-center container-sm">
        <h1>ToDo Pro</h1>
        <nav className="nav nav-pills nav-fill">
          <a className={`nav-link ${tab === 0 ? "active" : null}`} onClick={()=>setTab(0)} href="/#">ToDos</a>
          <a className={`nav-link ${tab === 1 ? "active" : null}`} onClick={()=>setTab(1)} href="/#">Listas</a>
        </nav>
      </header>
      <section className="container-sm mt-2">
        {tab === 1 ? <FormList onPress={addList}/> : <FormTodos lists={lists} onPress={addTodo}/>}
      </section>
      <section className="container-sm">
        <Cards lists={lists} onDeleteTodos={deleteTodo} onDeleteLists={deleteList} />
      </section>
    </>
  );
}

export default App;
