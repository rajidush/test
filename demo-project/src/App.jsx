import { useState } from 'react'
import './App.css'

function App() {
  
  const [todoList, setToDoList] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const newToDoList = [...todoList, newTask];
    setToDoList(newToDoList);
  }

  const deleteTask = (taskName) => {
    const newToDoList = todoList.filter((task) => {
      if(task === taskName) {
        return false;
      }else {
        return true;
      }
    });

    setToDoList(newToDoList);
  }

  return (
    <>  
      <h1>TO DO LIST</h1>  
     <div className="addTask">
      <input type="text" onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
     </div>

     <div className="list">
        {todoList.map((task) => {
          return (
          
          <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
        
        )
        })}
     </div>
    </>
  )
}

export default App
