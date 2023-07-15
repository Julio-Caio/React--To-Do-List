import React from 'react'

function Filter({filter, setFilter}) {
  return (
    <div className='filter'>
        <h3>Filter</h3>
        <div className="filter-options">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}> 
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not-completed">Not completed</option>
            </select>
        </div>
    </div>
  )
}

export default Filter