import React from 'react'
import {BiRun} from "react-icons/bi"
import './taskbody.css'

const Child = ({data,child}) => {
   
    const task=data.data
    const childtask=task?.filter((n)=>n.parent_task==!null).sort(task.parent_task)
    
    return (  
    <div>
       
      {  child && childtask.map((n)=>{
      return(
     
     
     < div className="child  justify-content-between" key={`${n.id}child` }>
    <div className='child-section text-center p-3 justify-content-center'><h5><span className='child-img'><BiRun size={40}/></span> &nbsp; {n.title} </h5></div>
        <div className='p-3'><div><h6 style={{color:"Red"}}>Due:{n.due}</h6></div>
       
        </div>       
       
     
                   
                   </div>)})}
    </div>
  )
}

export default Child
