import React, { useEffect, useState } from 'react'
import './taskbody.css'
import {BiRun} from "react-icons/bi"
import {IoMdPersonAdd} from "react-icons/io"
import {MdGroupAdd} from 'react-icons/md'
import axios from 'axios'
import { categories } from './Categories'
import  Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import activity from '../assets/icon-activity-2.jpg'
import {AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight, AiFillCaretUp, AiFillPauseCircle} from 'react-icons/ai'


import './taskbody.css'

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Child from './Child'
const Parent = ({pdata,parent,childClick,child,data,addNew,active}) => {

    const[title,setTitle]=useState("")
  const[due,setDue]=useState("") 
  const[parent_task,setParent_task]=useState(null)
  const[getdata,setGetdata]=useState("")
 


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  


  const task2=pdata.data
  const parenttask=task2?.filter((m)=>m.parent_task===null).sort(task2.id)




  return (
  
  <div>
      {  parenttask?.map((item,index)=>

          <div className="partent" key={index}>
  
  <div className=' title   text-center p-3 '><h5><img src={activity} className="activity-img"></img> &nbsp;{item.title}</h5></div>
      <div className='   p-3'><div><h6 style={{color:"Red"}}>Due:{item.due }</h6></div>
     
      <div >
      
      <>
    <Button variant="outline-success" style={{}} onClick={handleShow}>
    <MdGroupAdd size={30}/>&nbsp;Add Child Task
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
             onChange={(e)=>{setTitle(e.target.value)}}
             value={title} 
              
             
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Due</Form.Label>
            <Form.Control
              type="date"
              onChange={(e)=>{setDue(e.target.value)}}
             value={due} 
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Select aria-label="Default select example"  onChange={(e)=>setParent_task(e.target.value)} value={parent_task}>
          <option className= 'option' >-----</option>
          {categories.map((item,index)=>
                      <option key={index}>{item.child}</option>)   }
  </Form.Select>
           
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={addNew} >
          ADD
        </Button>
      </Modal.Footer>
    </Modal>
  </>
      
      
      </div>
      <div>  {!child && <div  className='up p-2' style={{color:"#0D6EFD"}} onClick={childClick} ><AiFillCaretRight size={50}/></div>}
{child && < div className='up p-2' style={{color:"#FF71AC"}} onClick={  childClick}><AiFillCaretUp size={50}/></div>} </div>
      
      </div>       
      <div><Child child={child} data={pdata}/>  </div>
     
       
    
          
  </div>
)}



  </div>
  )
}

export default Parent
