import {useState} from 'react'
import '../App.css'

const FormToDo = ( {createToDo} ) => {

  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!value || !category) return alert('Complete the fields!');
    
    alert("Success! Form sent!")
    createToDo(value, category);
    setValue("")
    setCategory("")
    }

  return (
    <div>
        <h2>Create a Task</h2>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Type title...' value={value} onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select one category</option>
                <option value="personal">Personal</option>
                <option value="study">Study</option>
                <option value="work">Work</option>
            </select>
            <button className="createTask" type="submit">Create task</button>
        </form>
    </div>
  )
}

export default FormToDo