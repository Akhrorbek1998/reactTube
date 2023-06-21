import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import './main.scss'
import { Box } from '@mui/material'
import {SearchBar} from '../'

const Navbar = () => {
  return (
    <Stack className='navbar' direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2}> 
      <Link className="site-logo" to="/">
        <h3>
          <span className="logo-text">C</span>
          <span className="logo-text">L</span>
          <span className="logo-text">O</span>
          <span className="logo-text">N</span>
          <span className="logo-text">E</span>
          <span className="logo-text">T</span>
          <span className="logo-text">U</span>
          <span className="logo-text">B</span>
          <span className="logo-text">E</span>
        </h3>
      </Link>

    <SearchBar />

      <Box />
    </Stack>
  )
}

export default Navbar
