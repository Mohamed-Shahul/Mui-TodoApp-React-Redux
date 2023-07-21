import React from 'react';
import { Box, Typography } from "@mui/material";


const Header = () => {
  return (
    <>
      <Box sx={{color:'white'}} bgcolor='blue' p={1} mb={2}>
        <Typography align='center' variant='h3' component='h2'>Todo App</Typography>
        </Box>
    </>
  )
}

export default Header
