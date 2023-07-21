import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, markTodo } from '../todoSlice';
import TodoListOut from './TodoListOut';

const TodoList = ({setTodoState,todoState}) => {
    const {todos}=useSelector((state)=>state.todos)
    const dispatch=useDispatch()


    const editTask=(selectedText,i)=>{
      dispatch(editTodo({selectedText,i}))
      setTodoState({...todoState,text:selectedText,editStatus:true})
    }
   
    const markTask=(i)=>{
      dispatch(markTodo(i))
    }

    const deleteTask=(i)=>{
      dispatch(deleteTodo(i))
    }
  return (
    <>
        <TodoListOut todos={todos} editTask={editTask} markTask={markTask} deleteTask={deleteTask}/>
    </>
  )
}

export default TodoList
