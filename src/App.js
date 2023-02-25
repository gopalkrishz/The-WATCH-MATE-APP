import './App.css';
import {Header} from "./components/Header"
import {Showtask} from "./components/Showtask"
import {AddTask} from "./components/AddTask"
import { useEffect, useState } from 'react';


function App() {
  const [taskLists, addTaskLists] = useState(JSON.parse(localStorage.getItem("list")) || [])
  const  [task,setTask] = useState({})

  useEffect(()=>{localStorage.setItem("list",JSON.stringify(taskLists))},[taskLists]);
  
  return (
    <div className="App">
     <Header/>
     <AddTask taskLists={taskLists} addTaskLists={addTaskLists} task={task} setTask={setTask}/>
     <Showtask taskLists={taskLists} addTaskLists={addTaskLists} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
