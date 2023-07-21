import { Box, Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../todoSlice'
import TodoList from './TodoList'

const AddTodo = () => {

    const [todoState,setTodoState]=useState({text:'',editStatus:false,markTodo:false})

    const dispatch=useDispatch()
    const {todos,selectedTodo}=useSelector((state)=>state.todos)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todoState.text!==''){
            dispatch(addTodo(todoState))
        }
        setTodoState({...todoState,text:''})
    }

    let handleUpdate=()=>{
      if(todoState.text!==''){
          dispatch(updateTodo(todoState))
      }
      setTodoState({...todoState,text:'',editStatus:false})
    }


  return (
    <>
      <Box sx={{
        p:2,
        display:"flex",       
        justifyContent:"center",   
        alignItems:"center",      
        gap:'10px'
      }}>
            <TextField onChange={(e)=>{setTodoState({...todoState,text:e.target.value})}} value={todoState.text} id="outlined-basic" label="Enter your Task..." variant="outlined" />
            {todoState.editStatus?
            <Button onClick={handleUpdate} variant="contained" size='large'>Update Task</Button>:
            <Button onClick={handleSubmit} variant="contained" color='success' size='large'>Add Task</Button>
             }
       </Box>
       <TodoList todoState={todoState} setTodoState={setTodoState}/>
    </>
  )
}

export default AddTodo
