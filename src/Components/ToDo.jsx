const ToDo = ({todo, deleteToDo, completeToDo}) => {
    return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className='content'>
          <div className="title">
            <p><b>{todo.text}</b></p>
          </div>

          <div className="category-type">
            <p className='category'>({todo.category})</p>
          </div>

        </div>
          <button className='button-complete' onClick={() => completeToDo(todo.id)}>✔</button>
          <button className='button-delete' onClick={() => deleteToDo(todo.id)}>X</button>
    </div>
  )
}


export default ToDo