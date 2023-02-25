import React from 'react'

export const Showtask = ({taskLists,addTaskLists,task,setTask}) => {

    const handleDelete=(id)=>{
        const afterDeleteList = taskLists.filter(todo=>todo.id!==id);
        addTaskLists(afterDeleteList)

    }
    const handleEdit=(id)=>{
        const findtask = taskLists.find(todo=>todo.id===id)
        setTask(findtask);
    }
  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>todo</span>
                <span className='count'>{taskLists.length}</span>
            </div>
            <button onClick={()=>{addTaskLists([])}} className='clearAll'>clear All</button>
        </div>
        <ul>
            {taskLists.map((todo)=>(
                <li key={todo.id}>
                <p>
                <span className='name'>{todo.name}</span>
                <span  className='time'>{todo.time}</span>

                </p>
                <i onClick={()=>{handleEdit(todo.id)}} class="bi bi-pencil-square"></i>
                <i onClick={()=>{handleDelete(todo.id)}}class="bi bi-trash"></i>
            </li>
            ))}
        </ul>
    </section>
  )
}
