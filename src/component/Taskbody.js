import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { categories } from './Categories'
import  Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import activity from '../assets/icon-activity-2.jpg'
import childimg from '../assets/child.png'
import './taskbody.css'

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import {BiRun} from "react-icons/bi"
import {IoMdPersonAdd} from "react-icons/io"
import {MdGroupAdd} from 'react-icons/md'
import {AiFillCaretDown, AiFillCaretRight, AiFillCaretUp, AiFillPauseCircle} from 'react-icons/ai'

import 'bootstrap/dist/css/bootstrap.min.css';
import Parent from './Parent'
import Child from './Child'


const Taskbody = () => {
  const[title,setTitle]=useState("")
  const[due,setDue]=useState("") 
  const[parent_task,setParent_task]=useState(null)
  const[getdata,setGetdata]=useState("")


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const[child,setChild]=useState(false)
    const[active,setActive]=useState(0)

    const childClick=(e)=>{
     e.preventDefault()
   setChild(true)
  
        setChild(!child)
        }
const addNew=async ()=>{
 try {axios.post("http://18.208.183.190/api/tasks/",{
  title,
  due,
parent_task
})
getPost()
}
 catch(err){
  console.log(err)
  
 }

}

  const getPost=async()=>{
const res=await axios.get("http://18.208.183.190/api/tasks/")
console.log(res)
const{todo_data}=res

setGetdata(res)

  }

useEffect(()=>{
  getPost()
},[])




  return (
    <Container>
    <div  className='heading d-flex justify-content-between m-4 ' >
    
    <div className='text-center'><h3 >My Tasks</h3></div>
    <div> 


    <>
    <Button variant="outline-success" style={{}} onClick={handleShow}>
    <IoMdPersonAdd size={25}/>&nbsp;Add Child Task
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

  
    </div>

<div className='tasks' child={AiFillPauseCircle}>


   < Parent  parent={!child}  pdata={getdata} childClick={childClick} child={child} getdata={getdata} addNew={addNew} active={active}/>
   
 
    
                   </div>

    </Container>
  )
}

export default Taskbody
