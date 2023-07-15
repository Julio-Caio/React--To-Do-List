import { useState } from 'react'
import './App.css'
import ToDo from './Components/ToDo'
import FormToDo from './Components/FormToDo'
import Searchbox from './Components/Searchbox'
import Filter from './Components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Projeto pra o GitHub",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Study",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar POO",
      category: "Study",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Assistir Felca",
      category: "Personal",
      isCompleted: false,
    }
  ])

  
  
  
  const createToDo = (text, category) => {
    const newToDo = [
      ...todos, {
        id: Math.floor(Math.random() * 100),
        text,
        category,
        isCompleted: false
    }]
    
    setTodos(newToDo)
  }
  
  const deleteToDo = (id) => {
    const newToDo = [...todos]
    const filterToDo = newToDo.filter((todo) => todo.id !== id ? todo: null);
    
    setTodos(filterToDo)
  };
  
  const completeToDo = (id) => {
    const newToDo = [...todos]
    const completeToDo = newToDo.map((todo) => todo.id == id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newToDo)
  }
  
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")


  
  return (
    <div className='app'>
      <h1>To Do List</h1>
      <Searchbox search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter}/>

      <div className='todo-list'>
        {todos
        .filter((todo)=> filter === "All" 
        ? true 
        : filter === "Completed" 
        ? todo.isCompleted 
        : !todo.isCompleted
        )
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo => 
          <ToDo key={todo.id} todo={todo} deleteToDo={deleteToDo} completeToDo={completeToDo} />
        ))}

        <FormToDo createToDo={createToDo} />
      </div>
    </div>
  )
}

export default App
