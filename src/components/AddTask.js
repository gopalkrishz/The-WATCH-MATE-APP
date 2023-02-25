import React from 'react'

export const AddTask = ({taskLists,addTaskLists,task,setTask}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.id){
            const date = new Date();
            const updatedList=taskLists.map((todo)=>(
                todo.id===task.id?{
                    id:date.getTime(),
                    name:task.name,
                    time:`${date.toLocaleTimeString()} {Indian Standard Time}  ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} `
                }:todo
            ))
            addTaskLists(updatedList);
            task.name=""

        }else{
            const date = new Date()
            const tasklist={
                id:date.getTime(),
                name:e.target.task.value,
                time:`${date.toLocaleTimeString()} {Indian Standard Time}  ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} `
    
            }
            addTaskLists([...taskLists,tasklist])
            e.target.task.value=""
        }
       
    }
  return (

    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>{
                setTask({...task,name:e.target.value})
            }}type="text" name="task" value={task.name} autoComplete='off' placeholder='Add-Task'></input>
            <button type='submit'>{task.id?"UPDATE":"ADD"}</button>
        </form>
    </section>
  )
}
