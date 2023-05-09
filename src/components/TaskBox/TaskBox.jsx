import React,{ useState,useEffect, createContext, useContext } from 'react'
import './TaskBox.css'
import {AktifContext} from '../TaskManagement/TaskManagement';



 
export default function TaskBox({testfonk,aktiflikFonksiyon,deleteAllItems,addNewTask,changeCheckbox,checkboxtext,buttontext,taskArray,checkboxvalue}) {
  const [selectAll, setSelectAll] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const {aktifMi,setAktifMi,aktifMiDelete,setAktifMiDelete} = useContext(AktifContext);

   
  // Tüm görevlerin seçim durumunu ayarla
  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    const updatedTasks = taskArray.map((task) => ({ ...task, completed: checked }));
    changeCheckbox(updatedTasks);
    
     
  };
   // Tek bir görevin seçim durumunu ayarla
  const handleTaskChange = (event) => {

    
   
    const taskId = event.target.value;
    const allCompletedFalse = taskArray.every(tasks => tasks.completed === false);

   
     if(allCompletedFalse===true){
 
      
      const updatedTasks = taskArray.map((task) =>
      task.title === taskId ? { ...task, completed: true } : task)
      changeCheckbox(updatedTasks);
       taskArray.map((task)=>{
       task.title === taskId ?addNewTask(task):null
      })
       

     }
     else{
      const updatedTasks = taskArray.map((task) =>
      task.title === taskId ? { ...task, completed: false } : task)
      changeCheckbox(updatedTasks);
     
     }
     
     
  };

 

  useEffect(() => {
    if (shuffle) {
      changeCheckbox((items) => [...items].sort(() => Math.random() - 0.5));
      setShuffle(false);
    }
  }, [shuffle]);

 useEffect(()=>{
 
  taskArray.map((task) =>
  task.completed === true ? setAktifMi(false) : null)

  const everyFalse = taskArray.every(tasks => tasks.completed === false);
  everyFalse===true?setAktifMi(true):null
  
  },[taskArray,setAktifMi])

  useEffect(()=>{
 
    taskArray.map((task) =>
    task.completed === true ? setAktifMiDelete(false) : null)
  
    const everyFalse = taskArray.every(tasks => tasks.completed === false);
    everyFalse===true?setAktifMiDelete(true):null
    
    },[taskArray,setAktifMiDelete])

  return (
 
    <div className="taskbox">
    
    <div className='topbar'>
        <div> 

            <div className='topbarcheckboxlabel'>
    <input type="checkbox"
    checked={selectAll}
    onChange={handleSelectAll}
    id={checkboxvalue} name={checkboxvalue} value={checkboxtext}/>
<label for={checkboxvalue}>{checkboxtext}</label></div>
</div>
<button onClick={() => {
  if(buttontext==="Shuffle")
  {  setShuffle(true)
  }
  else{
    deleteAllItems()
  }
}} className='taskboxbutton'>{buttontext}</button>
</div>

<hr />
<div className='taskboxcontent'> 

 <ul>
  {taskArray.map((task, index) => (
    <li key={task.id}>
      <div className='listitem'>
        <input type="checkbox" id={`val${task.value}`} 
        checked={task.completed}
        onChange={handleTaskChange}
 
        name={`val${task.value}`} value={task.title}/>
        <label htmlFor={`val${task.value}`}>{task.title}</label>
      </div>
    </li>
  ))}
</ul>
 </div>
    </div>
 
  )
}
