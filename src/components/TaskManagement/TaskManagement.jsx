import React, { useState,createContext, useContext } from 'react'
import TaskBox from '../TaskBox/TaskBox'
import Button from '../Buttons/Button'
import './TaskManagement.css'

export const AktifContext = createContext();

export default function TaskManagement() {

  const [aktifMi, setAktifMi] = useState(true);
  const [aktifMiDelete, setAktifMiDelete] = useState(true);
  const [newTask,setNewTask]=useState([]);

    const buttonTextArray = [
        {name:"addButton",
         text:"Add"     },
         {
         name:"removeButton",
         text:"Remove"  }   
    ]

    const taskboxArray = [
        {name:"addTaskBox",
         checkboxtext:"Select All",
         checkboxvalue:"selectall",    
        buttontext:"Shuffle",
      },
         {
         name:"removeTaskBox",
         checkboxtext:"Delete All",
         checkboxvalue:"deleteall",
         buttontext:"Delete"  }   
    ]

    const [addTaskArray,setAddTaskArray] =useState([
    { id: 1, title: "Line 1", value:"line1", completed: false },
    { id: 2, title: "Line 2", value:"line2", completed: false },
    { id: 3, title: "Line 3", value:"line3", completed: false },
    { id: 4, title: "Line 4", value:"line4", completed: false },
    { id: 5, title: "Line 5", value:"line5", completed: false },
    { id: 6, title: "Line 6", value:"line6", completed: false },
    { id: 7, title: "Line 7", value:"line7", completed: false },
    { id: 8, title: "Line 8", value:"line8", completed: false },
    { id: 9, title: "Line 9", value:"line9", completed: false }
    ]);

    const [deleteTaskArray,setDeleteTaskArray] =useState([
    { id: 1, title: "Link 1", value:"link1", completed: false },
    { id: 2, title: "Link 2", value:"link2", completed: false },
    { id: 3, title: "Link 3", value:"link3", completed: false },
    { id: 4, title: "Link 4", value:"link4", completed: false },
    { id: 5, title: "Link 5", value:"link5", completed: false },
    { id: 6, title: "Link 6", value:"link6", completed: false },
    { id: 7, title: "Link 7", value:"link7", completed: false },
    { id: 8, title: "Link 8", value:"link8", completed: false },
    { id: 9, title: "Link 9", value:"link9", completed: false }
    ]);

  const  addNewTask =(val)=>{
    setNewTask(val)
  }

   const changeAddCheckbox = (val) =>{
    setAddTaskArray(val)
  }

  const changeDeleteCheckbox = (val) =>{
    setDeleteTaskArray(val)
  }
  
  const addDeleteCheckbox = (val) =>{
    if (!deleteTaskArray.find(item => item.title === val.title)) {
      setDeleteTaskArray(prevState => [...prevState, val]);
    }
  }

  const deleteAllItems = () => {
    setDeleteTaskArray([]);
  }

  const removeItem = () => {
    setDeleteTaskArray(prevState => {
      return prevState.slice(0, -1);
    });
  }

  return (
     <AktifContext.Provider value={{aktifMi,setAktifMi,aktifMiDelete,setAktifMiDelete}}>

    <div className='taskcontent'>

          <TaskBox checkboxtext={taskboxArray[0].checkboxtext} 
          checkboxvalue={taskboxArray[0].checkboxvalue}
          buttontext={taskboxArray[0].buttontext}
          taskArray={addTaskArray}
          changeCheckbox={changeAddCheckbox}
          addNewTask={addNewTask}/>

          <div className='buttongroup'>
          <Button val={newTask} 
          addDeleteCheckbox={addDeleteCheckbox}
           text={buttonTextArray[0].text}/>
          <Button
          removeItem={removeItem}
           text={buttonTextArray[1].text}
            />
          </div>

        <TaskBox checkboxtext={taskboxArray[1].checkboxtext}
          checkboxvalue={taskboxArray[1].checkboxvalue}
         buttontext={taskboxArray[1].buttontext}
         taskArray={deleteTaskArray}
         changeCheckbox={changeDeleteCheckbox}
         deleteAllItems = {deleteAllItems}
          /> 
    </div>

    </AktifContext.Provider>
  )
}
