import React from 'react'
import '../App.css'
import {Delete, Edit, MarkChatRead, } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemSecondaryAction, ListItemText } from '@mui/material';

const TodoListOut = ({todos,editTask,markTask,deleteTask}) => {
  return (
    <>
      <Box sx={{ border: '1px solid silver',borderRadius: '4px',marginTop:'10px'}}>
           <List >
       {
            todos&&todos.map((todoVal,i)=>( 
              <ListItem key={i}>
                <ListItemButton>
                <ListItemText className={todoVal.markTodo?'marked':'unmarked'} primary={todoVal.text}/>
                <ListItemSecondaryAction>
                        {!todoVal.editStatus?
                        <Edit color="success" onClick={()=>{editTask(todoVal.text,i)}}/>:null}
                        {<MarkChatRead color="primary" onClick={()=>{markTask(i)}} />}
                        {<Delete onClick={()=>{deleteTask(i)}} sx={{color:'red'}}/>}
                </ListItemSecondaryAction>
                </ListItemButton>
              </ListItem>
            ))

           } 
           </List>

           </Box>
    </>
          
  )
}

export default TodoListOut
