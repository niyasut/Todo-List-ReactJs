import React from 'react'

const AddTask = () => {
  return (
    <div>
        <div className='input-container'>
            <input 
            type="text"
            className='input'
            placeholder='Add a new task'
            />
            <button className='add-btn'>ADD</button>

        </div>
       
    </div>
  )
}

export default AddTask