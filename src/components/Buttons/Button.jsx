import React,{useState,createContext, useContext} from 'react'
import './Button.css'
import {AktifContext} from '../TaskManagement/TaskManagement';
 
export default function Button({  text,val,addDeleteCheckbox,removeItem}) {
  const {aktifMi,setAktifMi,aktifMiDelete,setAktifMiDelete} = useContext(AktifContext);

  const addDeleteTable = () => {

    addDeleteCheckbox(val)
     }


  return (
    text==="Add"?
    <button 
    disabled={aktifMi}
     onClick={()=>{
    if(text==="Add"){
      addDeleteTable()
    }
    else{
      removeItem()
    }
  }}
  
  className='button'>
      {text}
  </button> :
   <button 
   disabled={aktifMiDelete}
    onClick={()=>{
   if(text==="Add"){
     addDeleteTable()
   }
   else{
     removeItem()
   }
 }}
 
 className='button'>
     {text}
 </button>
     
  )
}
